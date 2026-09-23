import { z } from "zod";
import { parse } from "yaml";
export const areas = [
  "Power BI",
  "Excel",
  "IDA",
  "Datenanalyse",
  "Werkzeugübergreifend",
] as const;
export const contexts = [
  "Marktsteuerung",
  "Bestandsanalyse",
  "Neugeschäft",
  "Kundenanalyse",
  "Prozessanalyse",
  "Reporting",
  "Datenqualität",
] as const;
export const imageSchema = z
  .object({
    src: z
      .string()
      .regex(
        /^\/?images\/(power-bi|excel|ida|grundlagen)\/[a-z0-9-]+\.(png|jpg|jpeg|webp|svg)$/,
      )
      .transform((src) => src.replace(/^\//, ""))
      .optional(),
    alt: z.string().min(10),
    caption: z.string().min(5),
    hinweis: z.string().optional(),
    schritt: z.number().int().positive().optional(),
    schema: z.boolean(),
    status: z.enum(["bereit", "todo", "ersetzen"]).default("bereit"),
    todo: z.string().min(10).optional(),
    bildAnzeigen: z.boolean().optional(),
    aufnahmeplan: z.object({
      prioritaet: z.enum(["Hoch", "Mittel", "Niedrig"]),
      werkzeug: z.string().min(3),
      oberflaeche: z.string().min(5),
      klickfolge: z.array(z.string().min(5)).min(1),
      daten: z.string().min(10),
      sichtbar: z.array(z.string().min(5)).min(1),
      ausschnitt: z.string().min(10),
      dateiname: z.string().regex(/^[a-z0-9-]+\.webp$/),
      zweck: z.string().min(10),
      nichtZeigen: z.array(z.string()).min(1),
    }).optional(),
  })
  .superRefine((image, ctx) => {
    if (image.status === "ersetzen" && (!image.src || !image.todo || !image.aufnahmeplan))
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Zu ersetzende Bilder benötigen Bildpfad, Grund und Aufnahmeplan." });
    if (image.status === "bereit" && (!image.src || image.todo))
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Bereite Bilder benötigen src und dürfen kein offenes TODO enthalten.",
      });
    if (image.status === "todo" && (!image.todo || image.src))
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "TODO-Platzhalter benötigen eine Beschreibung und haben noch keinen Bildpfad.",
      });
    if (image.src?.startsWith("images/ida/") && !image.schema)
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "IDA-Abbildungen müssen schematisch sein.",
      });
  });
export type ReferencePicture = z.infer<typeof imageSchema>;
export const schema = z
  .object({
    id: z.string().regex(/^[a-z0-9-]+$/),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    titel: z.string().min(3),
    bereich: z.enum(areas),
    werkzeuge: z.array(z.enum(["Power BI", "Excel", "IDA"])).default([]),
    kategorie: z.string(),
    schwierigkeit: z.enum(["Grundlage", "Fortgeschritten"]),
    kurzbeschreibung: z.string().min(20).max(340),
    ort: z.string().min(5),
    tags: z.array(z.string()),
    synonyme: z.array(z.string()),
    verwandteThemen: z.array(z.string()),
    kontexte: z.array(z.enum(contexts)),
    quelleTyp: z.enum([
      "allgemeines-wissen",
      "oeffentliche-dokumentation",
      "synthetisches-beispiel",
    ]),
    zuletztGeprueft: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    art: z.enum(["artikel", "problem", "aufgabe"]),
    praxis: z.boolean().default(false),
    schnellschritte: z.array(z.string().min(10)).min(2).max(4).optional(),
    kurzformel: z.string().max(600).optional(),
    formelreferenz: z.object({
      funktion: z.string(),
      eingabe: z.string(),
      anpassen: z.string(),
      version: z.string(),
    }).optional(),
    screenshots: z.array(imageSchema).default([]),
    quellen: z.array(z.string().url()).default([]),
  })
  .superRefine((item, ctx) => {
    if (item.bereich === "IDA")
      for (const img of item.screenshots)
        if (!img.schema || (img.src && !img.src.startsWith("images/ida/")))
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "IDA erlaubt ausschließlich schematische Darstellungen unter images/ida/.",
          });
  });
export type Content = z.infer<typeof schema> & { body: string };
export const requiredSections = [
  "Wann brauche ich das?",
  "Schritte",
  "Beispiel",
  "Typischer Fehler",
] as const;
export function sectionsOf(body: string): Record<string, string> {
  const parts = body.split(/^## /m).slice(1);
  return Object.fromEntries(
    parts.map((part) => {
      const nl = part.indexOf("\n");
      return [part.slice(0, nl).trim(), part.slice(nl + 1).trim()];
    }),
  );
}
export function parseContent(raw: string): Content {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) throw new Error("Markdown-Frontmatter fehlt.");
  const item = { ...schema.parse(parse(match[1])), body: match[2] };
  const sections = sectionsOf(item.body);
  for (const name of requiredSections)
    if (!sections[name])
      throw new Error(`${item.id}: Abschnitt „${name}“ fehlt.`);
  const steps = stepsOf(sections.Schritte);
  for (const image of item.screenshots)
    if (image.schritt && image.schritt > steps.length)
      throw new Error(
        `${item.id}: Bild verweist auf einen nicht vorhandenen Schritt ${image.schritt}.`,
      );
  return item;
}
/** Top-level numbered steps; indented continuation lines belong to their step. */
export function stepsOf(text: string): string[] {
  const entries = [...text.matchAll(/^(\d+)\.\s+(.+)(?:\r?\n|$)/gm)];
  if (!entries.length || text.slice(0, entries[0].index).trim())
    throw new Error("Schritte benötigen eine nummerierte Liste ab 1.");
  return entries.map((entry, index) => {
    if (Number(entry[1]) !== index + 1)
      throw new Error("Schritte müssen fortlaufend nummeriert sein.");
    return text
      .slice(
        entry.index! + entry[0].indexOf(entry[2]),
        entries[index + 1]?.index ?? text.length,
      )
      .trim();
  });
}
export function validateLinks(items: Content[]) {
  const ids = new Set(items.map((x) => x.id));
  if (ids.size !== items.length) throw new Error("Doppelte Inhalts-ID");
  if (new Set(items.map((x) => x.slug)).size !== items.length)
    throw new Error("Doppelter Slug");
  for (const x of items)
    for (const id of x.verwandteThemen)
      if (!ids.has(id))
        throw new Error(`${x.id}: Unbekannter Querverweis ${id}`);
}
