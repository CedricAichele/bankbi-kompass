---
{
  "id": "pq-datum",
  "slug": "pq-datum",
  "titel": "Datum in Power Query transformieren",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Leite Jahr, Monat oder Monatsende aus einer echten Datumsspalte ab. Erhalte das Originaldatum.",
  "ort": "Power Query → Spalte hinzufügen → Datum",
  "tags": [
    "Datum in Power Query transformieren"
  ],
  "synonyme": [
    "datum transformieren"
  ],
  "verwandteThemen": [
    "datumstabelle",
    "beziehungen",
    "ytd",
    "vorjahr",
    "datum-sortieren",
    "excel-datum"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/data-types"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Datum in Power Query transformieren",
      "caption": "Geplante Aufnahme: Power Query-Editor – Datum in Power Query transformieren",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query-Editor – Datum in Power Query transformieren",
        "klickfolge": [
          "Markiere **Zeitstempel** und stelle **Datum/Uhrzeit** mit dem passenden Gebietsschema ein.",
          "Soll die Uhrzeit erhalten bleiben, wähle **Spalte hinzufügen → Datum → Nur Datum**. Für eine Umwandlung derselben Spalte nutze das Register Transformieren.",
          "Nenne die neue Spalte **Datum** und setze sie auf Datentyp Datum."
        ],
        "daten": "| Zeitstempel |\n| --- |\n| 31.01.2026 14:30:00 |\n| 01.02.2026 09:15:00 |",
        "sichtbar": [
          "Aus Zeitstempel eine zusätzliche Datumsspalte ableiten.",
          "Spaltenüberschriften und relevante Optionen"
        ],
        "ausschnitt": "Power Query-Editor – Datum in Power Query transformieren mit Aus Zeitstempel eine zusätzliche Datumsspalte ableiten., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-pq-datum.webp",
        "zweck": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
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

Zeitstempel, Datumswerte und daraus abgeleitete Kalendermerkmale vorbereiten.

## Voraussetzungen

Eine vorhandene Abfrage mit den benötigten Spalten.

## Schritte

1. Öffne den **Power Query-Editor**: in Power BI über **Start → Daten transformieren**, in Excel über **Daten → Abfragen und Verbindungen → Rechtsklick auf die Abfrage → Bearbeiten**. Wähle links die zu bearbeitende Abfrage.
2. Markiere **Zeitstempel** und stelle **Datum/Uhrzeit** mit dem passenden Gebietsschema ein.
3. Soll die Uhrzeit erhalten bleiben, wähle **Spalte hinzufügen → Datum → Nur Datum**. Für eine Umwandlung derselben Spalte nutze das Register Transformieren.
4. Nenne die neue Spalte **Datum** und setze sie auf Datentyp Datum.
5. Leite bei Bedarf unter **Spalte hinzufügen → Datum** Jahr oder Monat ab. Ein Monatsname allein ist über mehrere Jahre nicht eindeutig.
6. Prüfe Tagesgrenzen und Zeitzonen fachlich. Verknüpfe später das reine Datum mit einer separaten Datumstabelle; die Modellschritte stehen im verlinkten Artikel.

## Beispiel

### Vorher · Beispieldaten

| Zeitstempel |
| --- |
| 31.01.2026 14:30:00 |
| 01.02.2026 09:15:00 |

### Aktion

Aus Zeitstempel eine zusätzliche Datumsspalte ableiten.

### Nachher · Beispielergebnis

| Zeitstempel | Datum |
| --- | --- |
| 31.01.2026 14:30:00 | 31.01.2026 |
| 01.02.2026 09:15:00 | 01.02.2026 |

## Ergebnis

Ein sauber typisiertes Datumsfeld steht für zeitliche Gruppierung und spätere Modellbeziehungen bereit.

## Warum funktioniert das?

Ein Zeitstempel mit Uhrzeit stimmt nicht mit einem Kalendertag um Mitternacht überein. Das abgeleitete Datum schafft eine passende tägliche Verknüpfungsebene.

## Typischer Fehler

Eine Datumstabelle an einen Zeitstempel mit Uhrzeit anbinden oder Januar verschiedener Jahre zusammenfassen.

## Plausibilitätscheck

Beide Uhrzeiten bleiben in der Quelle erhalten; die Datumsspalte enthält nur die jeweiligen Kalendertage.

## Passender M-Code

[Monatsultimo mit Date.EndOfMonth: Beispiel, Ergebnis und Anpassung](#/wissen/power-query-m?funktion=Date.EndOfMonth) in der praktischen M-Referenz.
