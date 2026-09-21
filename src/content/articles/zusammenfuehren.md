---
{
  "id": "zusammenfuehren",
  "slug": "zusammenfuehren",
  "titel": "Tabellen zusammenführen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zusammenführen ergänzt passende Daten anhand eines Schlüssels. Mehrere rechte Treffer können linke Zeilen vervielfachen.",
  "ort": "Power Query → Start → Abfragen zusammenführen",
  "tags": [
    "Tabellen zusammenführen",
    "Reporting"
  ],
  "synonyme": [
    "zwei tabellen",
    "Werte aus anderer Tabelle holen",
    "zwei Tabellen verbinden",
    "mehrere Zeilen",
    "zwei tabellen zusammen",
    "wert aus anderer tabelle"
  ],
  "verwandteThemen": [
    "schluessel",
    "kardinalitaet",
    "problem-merge-zeilen",
    "beziehung-oder-merge"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Tabellen zusammenführen",
      "caption": "Geplante Aufnahme: Power Query-Editor – Tabellen zusammenführen",
      "schritt": 5,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query-Editor – Tabellen zusammenführen",
        "klickfolge": [
          "Power BI Desktop → Start → Daten eingeben: Konten und Kunden getrennt mit den unten genannten Daten anlegen.",
          "Start → Daten transformieren → Konten auswählen.",
          "Start → Abfragen zusammenführen → Abfragen als neue Abfrage zusammenführen.",
          "Oben Konten, unten Kunden wählen; jeweils Kunde markieren. Join-Art Linker äußerer Join wählen. Vor OK aufnehmen."
        ],
        "daten": "**Konten**\n\n| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |\n\n**Kunden**\n\n| Kunde | Segment |\n| --- | --- |\n| P001 | A |\n| P002 | B |",
        "sichtbar": [
          "Konten oben und Kunden unten",
          "Kunde in beiden Tabellen markiert",
          "Linker äußerer Join sichtbar"
        ],
        "ausschnitt": "Power Query-Editor – Tabellen zusammenführen mit Konten mit Kunden über Kunde verbinden; Segment erweitern., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-zusammenfuehren.webp",
        "zweck": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    },
    {
      "alt": "Bedienort: Power Query – Tabellenspalte erweitern",
      "caption": "Geplante Aufnahme: Power Query – Tabellenspalte erweitern",
      "schritt": 6,
      "schema": false,
      "status": "todo",
      "todo": "Den zweiten notwendigen Schritt nach dem Merge zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Tabellenspalte erweitern",
        "klickfolge": [
          "Konten und Kunden wie im Beispiel laden.",
          "Merge nach Kunde als linken äußeren Join durchführen.",
          "Am Kopf der neuen Tabellenspalte das Erweitern-Symbol öffnen und Segment auswählen."
        ],
        "daten": "| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |\nKunden: P001/A, P002/B",
        "sichtbar": [
          "Neue Tabellenspalte",
          "Erweitern-Dialog",
          "Nur Segment ausgewählt"
        ],
        "ausschnitt": "Power Query – Tabellenspalte erweitern mit Neue Tabellenspalte, Erweitern-Dialog, Nur Segment ausgewählt. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-merge-erweitern.webp",
        "zweck": "Den zweiten notwendigen Schritt nach dem Merge zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Tabelle anhand passender Schlüssel um Angaben einer anderen Tabelle ergänzen.

## Voraussetzungen

Zwei vorhandene Abfragen mit fachlich passenden Schlüsselspalten. Für eine eindeutige Ergänzung muss der Schlüssel in der nachgeschlagenen Tabelle einmalig sein.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Prüfe beide Schlüsselspalten **Kunde** auf gleiche Datentypen und Schreibweise. In Kunden muss jeder Schlüssel für dieses Ziel genau einmal vorkommen.
3. Wähle links **Konten**, dann **Start → Abfragen zusammenführen → Abfragen als neue Abfrage zusammenführen**.
4. Wähle im Dialog oben Konten, unten Kunden. Markiere in beiden Vorschauen **Kunde**; bei mehreren Schlüsseln gilt dieselbe Auswahlreihenfolge.
5. Wähle **Linker äußerer Join**: Alle Kontenzeilen sollen bleiben, auch ohne passenden Kunden. Bestätige.
6. Klicke an der neuen Tabellenspalte auf das **Erweitern-Symbol mit zwei Pfeilen**. Wähle nur **Segment** und bestätige.
7. Vergleiche Zeilenzahl und Bestandssumme vor/nach dem Erweitern. Prüfe fehlende Segmente sowie mehrfach vorkommende Kundenschlüssel.

## Beispiel

### Vorher · Beispieldaten

**Konten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Kunden**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

### Aktion

Konten mit Kunden über Kunde verbinden; Segment erweitern.

### Nachher · Beispielergebnis

| Kunde | Konto | Bestand | Segment |
| --- | --- | --- | --- |
| P001 | K001 | 1000 | A |
| P001 | K002 | 2000 | A |
| P002 | K003 | 500 | B |

## Ergebnis

Passende Datensätze werden per Schlüssel zugeordnet; ausgewählte Felder der zweiten Tabelle ergänzen die erste.

## Warum funktioniert das?

Ein Join findet alle passenden Zeilen, nicht automatisch genau eine. Zwei Kundentreffer würden jede betroffene Kontenzeile beim Erweitern verdoppeln. Die Join-Art bestimmt zusätzlich, welche nicht passenden Zeilen erhalten bleiben.

## Typischer Fehler

Mehrfachtreffer mit Duplikate entfernen nachträglich verstecken oder inneren Join wählen und fehlende Schlüssel unbemerkt verlieren.

## Plausibilitätscheck

Drei Konten bleiben drei Zeilen und Summe 3500. Für P001 zweimal Segment A, für P002 B.
