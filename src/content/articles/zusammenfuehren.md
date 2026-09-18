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
    "beziehungen",
    "xverweis",
    "ida-join-pruefen",
    "anhaengen"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "screenshots": [
    {
      "schritt": 4,
      "caption": "Schlüssel und Verknüpfungsart beim Zusammenführen.",
      "alt": "Power Query: Zusammenführen zweier synthetischer Tabellen",
      "todo": "Den echten Zusammenführen-Dialog mit zwei Demo-Tabellen aufnehmen, die markierten Schlüssel sichtbar lassen.",
      "schema": false,
      "status": "todo"
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Du willst die Segmentbezeichnung einer Person an jede zugehörige Kontenzeile schreiben.

## Voraussetzungen

Synthetische Daten; Power Query in Power BI Desktop oder Excel. Die Menübezeichnung kann je Version leicht abweichen.

## Schritte

1. Öffne in Power BI **Start → Daten transformieren**. In Excel: Quelldaten als Tabelle formatieren und **Daten → Aus Tabelle/Bereich** wählen. Die folgenden Aktionen erfolgen im Power-Query-Editor.
2. Lege zusätzlich Personen mit den vier angegebenen Zeilen an. Prüfe, dass Personennummer dort genau einmal pro Person steht und in beiden Tabellen Text ist.
3. Wähle links Konten und dann Start → Abfragen zusammenführen → Abfragen als neu zusammenführen.
4. Wähle oben Konten und unten Personen. Klicke in beiden Vorschauen jeweils Personennummer an. Die Markierung muss dieselbe fachliche Kennung betreffen.
5. Wähle die Join-Art Links außen: alle aus erster, übereinstimmende aus zweiter. Bestätige mit OK.
6. Klicke am Kopf der neuen Tabellenspalte auf das Erweiterungssymbol. Wähle nur Segment aus, deaktiviere bei Bedarf das Präfix und bestätige.
7. Kontrolliere sechs Zeilen. Filtere die neue Spalte auf null, um nicht zugeordnete Konten zu finden.
8. Prüfe im rechten Bereich Angewendete Schritte die Vorschau vor und nach der Aktion. In Power BI abschließend Schließen & übernehmen, in Excel Schließen & laden wählen.

## Beispiel

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

Tabelle Personen:

| Personennummer | Segment |
| --- | --- |
| P001 | A |
| P002 | B |
| P003 | A |
| P004 | B |

## Ergebnis

Sechs Zeilen; K001, K002, K004 und K005 erhalten Segment A. Bestandssumme bleibt 9.000.

## Warum funktioniert das?

Zuerst wird je linker Zeile eine Tabelle passender rechter Zeilen ermittelt. Beim Erweitern entstehen so viele Ergebniszeilen wie rechte Treffer. Ein Left Join verhindert keine Vervielfachung.

## Typischer Fehler

**Symptom:** mehr als sechs Zeilen nach Erweiterung. **Ursache:** Personenschlüssel rechts mehrfach. **Lösung:** gewünschte rechte Granularität klären; nicht blind Ergebnisdubletten löschen.

## Plausibilitätscheck

Füge testweise eine zweite P001-Zeile rechts ein: Nach Erweiterung entstehen 8 Zeilen und 11.000 Bestand. Entferne den Testeintrag wieder.
