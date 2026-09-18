import { useMemo } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Search,
  X,
  ChartNoAxesColumnIncreasing,
  Table2,
  ListFilter,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { contents, byId } from "../content";
import { toolsCatalog, frequent, type Tool } from "../content/catalog";
import { contexts } from "../content/schema";
import { searchContent } from "../lib/search";
import { EntryList, SearchForm, Empty } from "../components/ReferenceLists";
import { DecisionTools } from "../components/DecisionTools";
export function HomePage() {
  return (
    <>
      <header className="home-heading">
        <span className="eyebrow">DEIN NACHSCHLAGEWERK IM BANKALLTAG</span>
        <h1>Was möchtest du machen oder finden?</h1>
        <p>Direkt zur passenden Funktion, Vorgehensweise oder Fehlerursache.</p>
        <SearchForm prominent />
      </header>
      <section className="frequent">
        <h2>Häufig gebraucht</h2>
        <div>
          {frequent.map((id) => (
            <Link key={id} to={"/wissen/" + id}>
              {(
                {
                  datenbereinigung: "Daten bereinigen",
                  beziehungen: "Beziehungen",
                  dubletten: "Dubletten",
                  distinctcount: "DISTINCTCOUNT",
                } as Record<string, string>
              )[id] || byId(id)!.titel}
              <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </section>
      <section className="tool-overview" aria-label="Werkzeugbereiche">
        {toolsCatalog.map((tool) => (
          <ToolOverview key={tool.slug} tool={tool} />
        ))}
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">VON DER FRAGE ZUR METHODE</span>
            <h2>Typische Aufgaben</h2>
          </div>
          <Link to="/aufgaben">
            Alle {contents.filter((x) => x.art === "aufgabe").length} Aufgaben{" "}
            <ArrowRight size={16} />
          </Link>
        </div>
        <EntryList
          compact
          items={[
            "tabellen-verbinden",
            "eine-zeile-je-person",
            "personen-zaehlen",
            "stichtag",
            "datenqualitaet",
            "dateien-zusammenfassen",
          ].map((id) => byId(id)!)}
        />
      </section>
      <div className="help-strip">
        <Lightbulb size={21} />
        <div>
          <strong>Die Zahl stimmt nicht?</strong>
          <span>
            Prüfe Summen, Filter, Mehrfachzeilen und leere Ergebnisse.
          </span>
        </div>
        <Link to="/probleme">
          Fehler eingrenzen <ArrowRight size={17} />
        </Link>
      </div>
    </>
  );
}
function ToolOverview({ tool }: { tool: Tool }) {
  const picks =
    tool.name === "Power BI"
      ? ["daten-laden", "beziehungen", "measure", "summe-zu-hoch"]
      : tool.name === "Excel"
        ? [
            "xverweis",
            "excel-dubletten-finden",
            "pivottable",
            "dateien-kombinieren",
          ]
        : ["reporting", "ida-filter", "ida-join-pruefen", "ida-excel-export"];
  return (
    <div className={"tool-panel " + tool.slug}>
      <div className="tool-title">
        <span className="tool-symbol">
          {tool.name === "Power BI" ? (
            <ChartNoAxesColumnIncreasing />
          ) : tool.name === "Excel" ? (
            <Table2 />
          ) : (
            <ListFilter />
          )}
        </span>
        <h2>{tool.name}</h2>
        <Link aria-label={tool.name + " öffnen"} to={"/bereich/" + tool.slug}>
          <ArrowUpRight size={21} />
        </Link>
      </div>
      <p>{tool.description}</p>
      <div className="quick-links">
        {picks.map((id) => (
          <Link key={id} to={"/wissen/" + id}>
            {byId(id)!.titel}
            <ChevronRight size={16} />
          </Link>
        ))}
      </div>
      <Link className="tool-all" to={"/bereich/" + tool.slug}>
        Alle Tätigkeiten <ArrowRight size={15} />
      </Link>
    </div>
  );
}
export function ToolPage() {
  const { slug } = useParams();
  const [params, setParams] = useSearchParams();
  const tool = toolsCatalog.find((x) => x.slug === slug);
  const group = params.get("gruppe") || "";
  if (!tool)
    return (
      <Empty text="Dieses Werkzeug gibt es nicht. Nutze die Navigation oder Suche." />
    );
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">AUFGABEN & FUNKTIONEN</span>
        <h1>{tool.name}</h1>
        <p>{tool.description}</p>
      </header>
      <SearchForm />
      {tool.name === "IDA" && (
        <div className="scope-note">
          <ShieldCheck size={19} />
          <p>
            <strong>Allgemeine Reportingprinzipien.</strong> Keine internen
            Funktionen, Datenmodelle oder Bildschirmaufnahmen. Konkrete
            IDA-Menüpfade und Syntax sind noch{" "}
            <Link to="/ida-hinweise">TODO</Link>.
          </p>
        </div>
      )}
      <div className="group-tabs" aria-label="Tätigkeitsgruppen">
        <button aria-pressed={!group} onClick={() => setParams({})}>
          Alle
        </button>
        {tool.groups.map((g) => (
          <button
            key={g.title}
            aria-pressed={group === g.title}
            onClick={() => setParams({ gruppe: g.title })}
          >
            {g.title}
          </button>
        ))}
      </div>
      {group && !tool.groups.some((g) => g.title === group) ? (
        <Empty text="Diese Tätigkeitsgruppe gibt es nicht. Wähle „Alle“." />
      ) : (
        <div className="catalog-grid">
          {tool.groups
            .filter((g) => !group || g.title === group)
            .map((g) => (
              <section key={g.title} className="catalog-group">
                <h2>
                  {g.title}
                  <span>{g.items.length}</span>
                </h2>
                <p className="catalog-intro">{({
                  "Daten vorbereiten": "Importieren, bereinigen und Daten in eine auswertbare Form bringen.",
                  "Datenmodell": "Eindeutige Schlüssel und verlässliche Filterwege aufbauen.",
                  "DAX & Measures": "Kennzahlen berechnen, die auf die aktuelle Auswahl reagieren.",
                  "Zeitintelligenz": "Zeiträume mit einem gemeinsamen Kalender vergleichen.",
                  "Bericht": "Die passende Darstellung wählen und ihre Filterwirkung prüfen.",
                  "Fehler": "Vom sichtbaren Symptom zum überprüfbaren Schnelltest.",
                  "Nachschlagen": "Werte sicher über passende Schlüssel zuordnen.",
                  "Filtern und Listen": "Treffer auswählen und dynamische Ergebnislisten erstellen.",
                  "Aggregieren": "Summen, Anzahlen und Quoten auf der richtigen Ebene bilden.",
                  "Listen": "Detailzeilen und gewünschte Ergebnisgranularität festlegen.",
                  "Filter": "Bedingungen, Klammern und fehlende Werte bewusst behandeln.",
                  "Mehrfachzeilen / Joins": "Zuordnungen kontrollieren und Zeilenvervielfachung erkennen.",
                } as Record<string, string>)[g.title] || `${g.title}: passende Funktion auswählen und am Beispiel nachvollziehen.`}</p>
                {["Grundlage", "Fortgeschritten"].map((level) => {
                  const entries = g.items.filter((x) => byId(x.id)?.schwierigkeit === level);
                  return entries.length ? <div key={level}><strong className="catalog-level">{level === "Grundlage" ? "Grundlagen · hier beginnen" : "Für Fortgeschrittene"}</strong><ul>
                  {entries.map((x) => (
                    <li key={x.label}>
                      <Link to={"/wissen/" + x.id}>
                        <span>{x.label}</span>
                        <ChevronRight size={16} />
                      </Link>
                    </li>
                  ))}
                </ul></div> : null;
                })}
              </section>
            ))}
        </div>
      )}
    </>
  );
}
export function Browse({
  kind,
  area,
  fixedCategory,
}: {
  kind?: string;
  area?: string;
  fixedCategory?: string;
}) {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const selected = area || params.get("bereich") || "";
  const category = fixedCategory || params.get("kategorie") || "";
  const context = params.get("kontext") || "";
  const level = params.get("niveau") || "";
  const result = useMemo(
    () =>
      searchContent(contents, query, {
        bereich: selected,
        kategorie: category,
        kontext: context,
        schwierigkeit: level,
        art: kind,
      }),
    [query, selected, category, context, level, kind],
  );
  const eligible = searchContent(contents, "", {
    bereich: selected,
    art: kind,
  });
  const tool = toolsCatalog.find((t) => t.name === selected);
  const categories = [
    ...new Set([
      ...eligible.map((x) => x.kategorie),
      ...(tool?.groups.map((g) => g.title) || []),
    ]),
  ].sort();
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    if (key === "bereich") next.delete("kategorie");
    setParams(next, { replace: true });
  }
  const title =
    fixedCategory === "Werkzeugwahl"
      ? "Werkzeugwahl"
      : kind === "aufgabe"
        ? "Typische Aufgaben"
        : kind === "problem"
          ? "Probleme & Lösungen"
          : area === "Datenanalyse"
            ? "Datenbegriffe"
            : "Suchen & finden";
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">
          {kind === "aufgabe"
            ? "EIN ZIEL. MEHRERE WERKZEUGE."
            : "SCHNELL ZUR PASSENDEN HILFE"}
        </span>
        <h1>{title}</h1>
        <p>
          {kind === "aufgabe"
            ? "Wähle dein Vorhaben. Die Aufgabe zeigt passende Wege in Power BI, Excel und IDA."
            : kind === "problem"
              ? "Symptom finden, Ursache prüfen, nächsten Schritt ausführen."
              : "Suche auch nach deiner Aufgabe – du musst den Funktionsnamen nicht kennen."}
        </p>
      </header>
      {fixedCategory === "Werkzeugwahl" && <DecisionTools />}
      <div className="search-field prominent">
        <Search size={22} />
        <input
          aria-label="Suchbegriff"
          placeholder="z. B. zwei Tabellen, falsche Summe, mehrere Konten pro Kunde"
          value={query}
          onChange={(e) => update("q", e.target.value)}
        />
        {query && (
          <button
            aria-label="Suchbegriff löschen"
            onClick={() => update("q", "")}
          >
            <X size={19} />
          </button>
        )}
      </div>
      <div className="filters">
        {!area && (
          <label>
            Werkzeug
            <select
              value={selected}
              onChange={(e) => update("bereich", e.target.value)}
            >
              <option value="">Alle Werkzeuge</option>
              {["Power BI", "Excel", "IDA", "Datenanalyse"].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
        )}
        {!fixedCategory && (
          <label>
            Tätigkeit
            <select
              value={category}
              onChange={(e) => update("kategorie", e.target.value)}
            >
              <option value="">Alle Tätigkeiten</option>
              {categories.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
        )}
        <label>
          Kontext
          <select
            value={context}
            onChange={(e) => update("kontext", e.target.value)}
          >
            <option value="">Alle Kontexte</option>
            {contexts.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Niveau
          <select
            value={level}
            onChange={(e) => update("niveau", e.target.value)}
          >
            <option value="">Alle Niveaus</option>
            <option>Grundlage</option>
            <option>Fortgeschritten</option>
          </select>
        </label>
        <button className="text-button" onClick={() => setParams({})}>
          Zurücksetzen
        </button>
      </div>
      <p className="result-count" role="status">
        {result.length} {result.length === 1 ? "Eintrag" : "Einträge"}
        {query && ` für „${query}“`}
      </p>
      {result.length ? (
        <EntryList items={result} quickView={Boolean(query.trim())} />
      ) : (
        <Empty text="Versuche einen kürzeren Begriff oder entferne einzelne Filter." />
      )}
      {kind === "problem" && (
        <details className="decision-details">
          <summary>Die richtige Methode auswählen</summary>
          <DecisionTools />
        </details>
      )}
    </>
  );
}
