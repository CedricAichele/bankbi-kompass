---
{
  "id": "zusammenfuehren",
  "slug": "zusammenfuehren",
  "titel": "Tabellen zusammenführen",
  "bereich": "Power BI",
  "werkzeuge": ["Power BI", "Excel"],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Zusammenführen ergänzt passende Daten anhand eines Schlüssels. Mehrere rechte Treffer können linke Zeilen vervielfachen.",
  "ort": "Power Query → Start → Abfragen zusammenführen",
  "tags": ["Tabellen zusammenführen", "Reporting"],
  "synonyme":
    [
      "zwei tabellen",
      "Werte aus anderer Tabelle holen",
      "zwei Tabellen verbinden",
      "mehrere Zeilen",
    ],
  "verwandteThemen":
    ["beziehungen", "xverweis", "ida-join-pruefen", "anhaengen"],
  "kontexte": ["Reporting"],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
  "quellen":
    ["https://learn.microsoft.com/en-us/power-query/merge-queries-overview"],
  "screenshots":
    [
      {
        "schritt": 2,
        "caption": "Schlüssel und Verknüpfungsart beim Zusammenführen.",
        "alt": "Power Query: Zusammenführen zweier synthetischer Tabellen",
        "todo": "Den echten Zusammenführen-Dialog mit zwei Demo-Tabellen aufnehmen, die markierten Schlüssel sichtbar lassen.",
        "schema": false,
        "status": "todo",
      },
    ],
}
---

## Wann brauche ich das?

Du willst Werte aus einer anderen Tabelle holen oder zwei Tabellen über IDs verbinden.

## Schritte

1. Beide Tabellen und die passenden Schlüsselspalten wählen.
2. Join-Art festlegen, z. B. links außen für alle linken Zeilen.
3. Benötigte Spalten erweitern; Trefferzahl und Summen prüfen.

## Beispiel

Links: K-A mit PR-A. Rechts: PR-A mit Gruppe A. Ergebnis: K-A, PR-A, Gruppe A. Zwei rechte PR-A-Zeilen würden zwei Ergebniszeilen erzeugen.

## Typischer Fehler

Ein Left Outer Join garantiert nicht, dass die Zeilenanzahl gleich bleibt.
