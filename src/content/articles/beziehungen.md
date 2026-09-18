---
{
  "id": "beziehungen",
  "slug": "beziehungen",
  "titel": "Beziehung erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Beziehung verbindet Tabellen im Modell, damit eine Dimension die passenden Fakten filtert.",
  "ort": "Power BI Desktop → Modellansicht → Beziehungen verwalten",
  "tags": [
    "Beziehung erstellen",
    "Reporting"
  ],
  "synonyme": [
    "zwei tabellen",
    "Werte aus anderer Tabelle holen",
    "zwei Tabellen verbinden",
    "zwei tabellen zusammen",
    "wert aus anderer tabelle"
  ],
  "verwandteThemen": [
    "eins-zu-viele",
    "filterrichtung",
    "beziehung-fehler"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand"
  ],
  "screenshots": [
    {
      "src": "images/power-bi/beziehung.svg",
      "alt": "Schema: Eine Produktzeile mit PR-A filtert zwei Bestandszeilen mit PR-A.",
      "hinweis": "1 steht für einen eindeutigen Produktschlüssel; n für mehrere passende Detailzeilen.",
      "caption": "Selbst erstelltes Schema mit synthetischen Kennungen. Keine Programmoberfläche.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    },
    {
      "src": "images/power-bi/pbi-beziehungen.webp",
      "alt": "Aktive Beziehung: Personen auf der 1-Seite filtern Konten auf der *-Seite.",
      "caption": "Aktive Beziehung: Personen auf der 1-Seite filtern Konten auf der *-Seite.",
      "schritt": 5,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Personen sollen Konten filtern, ohne die Tabellen physisch zusammenzuführen.

## Voraussetzungen

Power BI Desktop; Tabelle Konten aus dem Beispiel und Personen mit P001, P002, P003, P004 jeweils einmal.

## Schritte

1. Lade Konten und Personen. Stelle Personennummer auf beiden Seiten auf Text.
2. Prüfe in Personen vier Zeilen und vier unterschiedliche Kennungen. Leere Kennungen dürfen nicht als Sammelschlüssel dienen.
3. Öffne links die Modellansicht. Ziehe Personen[Personennummer] auf Konten[Personennummer] oder wähle Beziehungen verwalten → Neu.
4. Prüfe die Tabellen und Spalten im Dialog. Personen muss die 1-Seite, Konten die *-Seite sein. Wähle eine aktive Beziehung mit einfacher Filterrichtung.
5. Bestätige und kontrolliere die durchgezogene Linie im Modell. Eine gestrichelte Linie kennzeichnet eine inaktive Beziehung.
6. Erstelle Gesamtbestand = SUM ( Konten[Bestand_EUR] ). Füge eine Karte mit diesem Measure hinzu.
7. Füge einen Slicer aus Personen[Personennummer] hinzu. Wähle P003 und kontrolliere 4.000.
8. Lösche die Slicerauswahl und prüfe wieder 9.000. Teste auch P001 mit 2.000.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

## Ergebnis

Die Dimension Personen filtert Konten: P003 → K004 und K005 → 4.000.

## Warum funktioniert das?

Die Beziehung leitet Filter weiter. Sie kopiert keine Spalten in Konten und behebt keine fehlenden oder doppelten Schlüssel.

## Typischer Fehler

**Symptom:** keine 1:n-Beziehung möglich. **Ursache:** doppelte Schlüssel auf der 1-Seite. **Lösung:** die Dimension fachlich eindeutig machen, statt automatisch n:m oder beidseitige Filter zu aktivieren.

## Plausibilitätscheck

Slicer muss aus Personen stammen. Stimmt der Wert nur mit einem Konten-Slicer, ist der Filterweg von der Dimension noch nicht bewiesen.
