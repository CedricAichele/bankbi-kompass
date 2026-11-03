// Keine gefundenen Werte ausgeben: mögliche vertrauliche Treffer bleiben lokal in der Datei.
export function scanContent(text: string, options?: { ida?: boolean }): string[] {
  const withoutUrls = text.replace(/https?:\/\/[^\s)<>"']+/g, "");
  const rules: [string, RegExp][] = [
    ["Mögliche E-Mail-Adresse", /[\w.+-]+@[\w.-]+\.[a-z]{2,}/i],
    ["Mögliche IBAN", /\b[A-Z]{2}\s?\d{2}(?:\s?[A-Z0-9]){11,30}\b/],
    ["Mögliche lange Kontonummer", /\b\d{8,20}\b/],
    ["Mögliche Ticketkennung", /\b[A-Z]{2,10}-\d{4,}\b/],
    [
      "Mögliches Geheimnis",
      /\b(?:password|passwort|api[_-]?key|secret|token)\s*[:=]\s*["']?[^\s"']{5,}/i,
    ],
    [
      "Möglicher Firmenname (manuell prüfen)",
      /\b[\p{L}][\p{L}\s&.-]{2,45}\s(?:GmbH|AG|SE|eG)\b/u,
    ],
    [
      "Möglicher Personenname (manuell prüfen)",
      /\b(?:Herr|Frau|Kunde|Kundin)\s+[A-ZÄÖÜ][a-zäöüß]+\s+[A-ZÄÖÜ][a-zäöüß]+\b/,
    ],
  ];
  const findings = rules
    .filter(([, regex]) => regex.test(withoutUrls))
    .map(([label]) => label);
  for (const match of text.matchAll(/https?:\/\/[^\s)<>"']+/g)) {
    try {
      const url = new URL(match[0]);
      const publicProductSource = !url.search && (
        (url.hostname === "www.rurberatung.de" && url.pathname === "/") ||
        (url.hostname === "bankinghub.de" && url.pathname === "/operations/migration-ausbaustufen-agree21") ||
        (url.hostname === "www.arbeitsagentur.de" && url.pathname === "/jobsuche/jobdetail/14935-00011588_007-S") ||
        (url.hostname === "public.dhe.ibm.com" && url.pathname === "/software/data/cognos/documentation/docs/en/10.1.1/ug_fm.pdf"));
      if (
        (!publicProductSource && ![
          "learn.microsoft.com",
          "support.microsoft.com",
          "docs.github.com",
          "www.ibm.com",
        ].includes(url.hostname)) ||
        (url.hostname === "www.ibm.com" &&
          !url.pathname.startsWith("/docs/")) ||
        url.username ||
        url.password
      )
        findings.push("URL außerhalb der freigegebenen öffentlichen Quellen");
    } catch {
      findings.push("Ungültige URL");
    }
  }
  if (options?.ida || /"bereich"\s*:\s*"IDA"/.test(text)) {
    const idaRules: [string, RegExp][] = [
      ["Mögliche konkrete interne Kennung", /\b(?:packageName|Package[- ]?Name|Paketname|Berichtsname|Vorlagennummer|GVM[- ]?Vorlage|Administrationsnummer|Administrationspfad|Sachgebietscode|Änderungskennzeichen|Transferpfad|Dateifeldname|TECH_KEY|CHANGE_CODE)\b["']?\s*[:=]\s*["']?[\w./\\-]{3,}/i],
      ["Möglicher qualifizierter interner Modellpfad", /\[[^\]\n]+\]\.\[[^\]\n]+\]\.\[[^\]\n]+\]/],
      ["Konkreter Dateiname im IDA-Inhalt", /\b[a-z][\w.-]{1,}\.(?:csv|xlsx?|dat|txt|xml)\b/i],
      ["Möglicher interner Pfad", /(?:\\\\[a-z0-9_-]+\\|\/(?:intern|intranet|administration)\/)/i],
    ];
    for (const [label,regex] of idaRules) if(regex.test(withoutUrls)) findings.push(label);
  }
  return [...new Set(findings)];
}
