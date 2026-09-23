---
{
  "id": "pq-duplizieren",
  "slug": "pq-duplizieren",
  "titel": "Referenz oder Duplikat einer Abfrage?",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Nutze eine Referenz für gemeinsame Bereinigungslogik und ein Duplikat für eine unabhängig weiterentwickelte Schrittkopie. Beide bleiben Abfragen ihrer Datenquellen.",
  "ort": "Power Query → Rechtsklick auf Abfrage → Duplizieren / Verweis",
  "tags": [
    "Abfrage duplizieren oder referenzieren"
  ],
  "synonyme": [
    "abfrage referenzieren",
    "abfrage duplizieren",
    "Abfrage duplizieren oder referenzieren"
  ],
  "verwandteThemen": [
    "pq-laden",
    "power-query"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/manage-queries",
    "https://learn.microsoft.com/en-us/power-bi/guidance/power-query-referenced-queries"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Abfrage duplizieren oder referenzieren",
      "caption": "Geplante Aufnahme: Power Query – Abfrage duplizieren oder referenzieren",
      "schritt": 2,
      "schema": false,
      "status": "todo",
      "todo": "Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Referenz oder Duplikat einer Abfrage?",
        "klickfolge": [
          "Eine gemeinsame Basisabfrage so weit bereinigen, dass mehrere Ergebnisse darauf aufbauen können.",
          "Rechtsklick auf die Abfrage → **Verweis/Referenz** erzeugt eine Abfrage, deren Quelle das Ergebnis der ursprünglichen Abfrage ist. Änderungen an der Basis wirken auf abhängige Abfragen.",
          "**Duplizieren** kopiert die bisherige Schrittkette. Spätere Änderungen an dieser Kette sind unabhängig; ein Duplikat kann aber weiterhin dieselbe Datenquelle oder andere referenzierte Abfragen verwenden.",
          "Basis, Ergebnis und Prüf-Abfrage sinnvoll benennen. Über **Ansicht → Abfrageabhängigkeiten** die Verbindungen prüfen.",
          "Laden nur für benötigte Endtabellen aktivieren. Eine Referenz garantiert keine einmalige Quellabfrage und ist kein dauerhafter Cache."
        ],
        "daten": "~~~text\nQuelle → Basis bereinigt → Referenz Kundenübersicht\n                       → Referenz Fehlerprüfung\nQuelle → Duplikat mit eigener Schrittkette\n~~~\n\nEine Korrektur der Textbereinigung in Basis erreicht beide Referenzen. Die unabhängig duplizierte Schrittkette muss separat korrigiert werden.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pbi-pq-duplizieren.webp",
        "zweck": "Nutze eine Referenz für gemeinsame Bereinigungslogik und ein Duplikat für eine unabhängig weiterentwickelte Schrittkopie. Beide bleiben Abfragen ihrer Datenquellen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    },
    {
      "src": "images/power-bi/pbi-abfragen.webp",
      "alt": "Das Kontextmenü bietet Duplizieren und Verweis.",
      "caption": "Das Kontextmenü bietet Duplizieren und Verweis.",
      "schritt": 2,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen.",
      "bildAnzeigen": false
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Nutze eine Referenz für gemeinsame Bereinigungslogik und ein Duplikat für eine unabhängig weiterentwickelte Schrittkopie. Beide bleiben Abfragen ihrer Datenquellen.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Eine gemeinsame Basisabfrage so weit bereinigen, dass mehrere Ergebnisse darauf aufbauen können.
2. Rechtsklick auf die Abfrage → **Verweis/Referenz** erzeugt eine Abfrage, deren Quelle das Ergebnis der ursprünglichen Abfrage ist. Änderungen an der Basis wirken auf abhängige Abfragen.
3. **Duplizieren** kopiert die bisherige Schrittkette. Spätere Änderungen an dieser Kette sind unabhängig; ein Duplikat kann aber weiterhin dieselbe Datenquelle oder andere referenzierte Abfragen verwenden.
4. Basis, Ergebnis und Prüf-Abfrage sinnvoll benennen. Über **Ansicht → Abfrageabhängigkeiten** die Verbindungen prüfen.
5. Laden nur für benötigte Endtabellen aktivieren. Eine Referenz garantiert keine einmalige Quellabfrage und ist kein dauerhafter Cache.

## Beispiel

~~~text
Quelle → Basis bereinigt → Referenz Kundenübersicht
                       → Referenz Fehlerprüfung
Quelle → Duplikat mit eigener Schrittkette
~~~

Eine Korrektur der Textbereinigung in Basis erreicht beide Referenzen. Die unabhängig duplizierte Schrittkette muss separat korrigiert werden.

## Ergebnis

Gemeinsame Logik liegt in der Basisabfrage; Referenzen verwenden deren Ergebnis. Ein Duplikat kann unabhängig weiterentwickelte Schritte enthalten.

## Warum funktioniert das?

Die Referenz verweist auf ein Abfrageergebnis; das Duplikat übernimmt Definitionen zum Kopierzeitpunkt. Keines ist ein eingefrorener Datenstand.

## Typischer Fehler

Eine Referenz als Leistungsversprechen oder Snapshot verwenden.

## Plausibilitätscheck

Änderung an Basis in beiden Referenzen nachvollziehen; unabhängig duplizierte Schritte und Ladeziele separat prüfen.
