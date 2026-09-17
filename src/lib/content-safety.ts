// Keine gefundenen Werte ausgeben: mögliche vertrauliche Treffer bleiben lokal in der Datei.
export function scanContent(text: string): string[] {
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
    .filter(([, regex]) => regex.test(text))
    .map(([label]) => label);
  for (const match of text.matchAll(/https?:\/\/[^\s)<>]+/g)) {
    try {
      const url = new URL(match[0]);
      if (
        ![
          "learn.microsoft.com",
          "support.microsoft.com",
          "docs.github.com",
          "www.ibm.com",
        ].includes(url.hostname) ||
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
  return [...new Set(findings)];
}
