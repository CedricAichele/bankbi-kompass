---
{
  "id": "pq-profiling",
  "slug": "pq-profiling",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "ort": "Power Query-Editor",
  "tags": [],
  "synonyme": [
    "spaltenqualität",
    "spaltenverteilung",
    "spaltenprofil",
    "profiling",
    "Datenprofil"
  ],
  "verwandteThemen": [
    "pq-workflow",
    "dubletten",
    "pq-fehler"
  ],
  "kontexte": [
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/data-profiling-tools"
  ],
  "screenshots": [
    {
      "alt": "Spaltenqualität mit vollständig erfundenen Daten",
      "caption": "Spaltenqualität",
      "schritt": 2,
      "schema": false,
      "status": "todo",
      "todo": "Passende Aufnahme zum aktuellen Ablauf mit frei erfundenen Daten ergänzen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Spaltenqualität",
        "klickfolge": [
          "Im **Power Query-Editor → Ansicht** die Optionen **Spaltenqualität**, **Spaltenverteilung** und **Spaltenprofil** aktivieren.",
          "**Spaltenqualität:** Gültige, fehlerhafte und leere Werte unterscheiden. Ein technisch gültiger Betrag kann fachlich trotzdem falsch sein; Fehlerwerte zunächst untersuchen statt löschen.",
          "**Spaltenverteilung:** Häufigkeiten vergleichen. Unterschiedlich (distinct) zählt verschiedene Werte; eindeutig (unique) zählt Werte, die genau einmal vorkommen.",
          "**Spaltenprofil:** Eine Spalte auswählen. Unten Statistik und Verteilung lesen: Anzahl, Fehler, leer sowie je Datentyp weitere Kennzahlen wie Minimum, Maximum oder Durchschnitt.",
          "**Prüfumfang:** Power Query profiliert standardmäßig nur die ersten **1000 Zeilen**. Unten auf den Hinweis zum Profiling klicken und **Gesamter Datensatz** wählen, insbesondere vor Schlüsselprüfungen oder Freigabe einer Aufbereitung. Das kann bei großen Quellen länger dauern.",
          "Auffällige Werte und ihre Quellzeilen prüfen. Nach Typumwandlung, Bereinigung oder Merge erneut profilieren, da jeder Schritt die Werte verändern kann."
        ],
        "daten": "| Kunde | Betrag |\n| --- | --- |\n| 1001 | 100 |\n| 1001 | 200 |\n| 1002 | 500 |\n\n**Aktion:** Kundenverteilung betrachten. **Ergebnis:** zwei unterschiedliche Werte, ein nur einmal vorkommender Wert (1002). Drei gültige Beträge mit Minimum 100 und Maximum 500.\n\nEin fehlerhafter Betrag erst in Zeile 1001 bleibt bei einem Profil der ersten 1000 Zeilen unentdeckt. Wechsle deshalb für die Abschlussprüfung den Umfang.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pq-profiling-2.webp",
        "zweck": "Profiling zeigt Fehler, Lücken und Häufigkeiten vor einer Transformation. Prüfe die vollständige Datenmenge, bevor du aus einer sauberen Vorschau auf eine saubere Quelle schließt.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    },
    {
      "alt": "Spaltenverteilung mit vollständig erfundenen Daten",
      "caption": "Spaltenverteilung",
      "schritt": 3,
      "schema": false,
      "status": "todo",
      "todo": "Passende Aufnahme zum aktuellen Ablauf mit frei erfundenen Daten ergänzen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Spaltenverteilung",
        "klickfolge": [
          "Im **Power Query-Editor → Ansicht** die Optionen **Spaltenqualität**, **Spaltenverteilung** und **Spaltenprofil** aktivieren.",
          "**Spaltenqualität:** Gültige, fehlerhafte und leere Werte unterscheiden. Ein technisch gültiger Betrag kann fachlich trotzdem falsch sein; Fehlerwerte zunächst untersuchen statt löschen.",
          "**Spaltenverteilung:** Häufigkeiten vergleichen. Unterschiedlich (distinct) zählt verschiedene Werte; eindeutig (unique) zählt Werte, die genau einmal vorkommen.",
          "**Spaltenprofil:** Eine Spalte auswählen. Unten Statistik und Verteilung lesen: Anzahl, Fehler, leer sowie je Datentyp weitere Kennzahlen wie Minimum, Maximum oder Durchschnitt.",
          "**Prüfumfang:** Power Query profiliert standardmäßig nur die ersten **1000 Zeilen**. Unten auf den Hinweis zum Profiling klicken und **Gesamter Datensatz** wählen, insbesondere vor Schlüsselprüfungen oder Freigabe einer Aufbereitung. Das kann bei großen Quellen länger dauern.",
          "Auffällige Werte und ihre Quellzeilen prüfen. Nach Typumwandlung, Bereinigung oder Merge erneut profilieren, da jeder Schritt die Werte verändern kann."
        ],
        "daten": "| Kunde | Betrag |\n| --- | --- |\n| 1001 | 100 |\n| 1001 | 200 |\n| 1002 | 500 |\n\n**Aktion:** Kundenverteilung betrachten. **Ergebnis:** zwei unterschiedliche Werte, ein nur einmal vorkommender Wert (1002). Drei gültige Beträge mit Minimum 100 und Maximum 500.\n\nEin fehlerhafter Betrag erst in Zeile 1001 bleibt bei einem Profil der ersten 1000 Zeilen unentdeckt. Wechsle deshalb für die Abschlussprüfung den Umfang.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pq-profiling-3.webp",
        "zweck": "Profiling zeigt Fehler, Lücken und Häufigkeiten vor einer Transformation. Prüfe die vollständige Datenmenge, bevor du aus einer sauberen Vorschau auf eine saubere Quelle schließt.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    },
    {
      "alt": "Spaltenprofil mit vollständig erfundenen Daten",
      "caption": "Spaltenprofil",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Passende Aufnahme zum aktuellen Ablauf mit frei erfundenen Daten ergänzen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Spaltenprofil",
        "klickfolge": [
          "Im **Power Query-Editor → Ansicht** die Optionen **Spaltenqualität**, **Spaltenverteilung** und **Spaltenprofil** aktivieren.",
          "**Spaltenqualität:** Gültige, fehlerhafte und leere Werte unterscheiden. Ein technisch gültiger Betrag kann fachlich trotzdem falsch sein; Fehlerwerte zunächst untersuchen statt löschen.",
          "**Spaltenverteilung:** Häufigkeiten vergleichen. Unterschiedlich (distinct) zählt verschiedene Werte; eindeutig (unique) zählt Werte, die genau einmal vorkommen.",
          "**Spaltenprofil:** Eine Spalte auswählen. Unten Statistik und Verteilung lesen: Anzahl, Fehler, leer sowie je Datentyp weitere Kennzahlen wie Minimum, Maximum oder Durchschnitt.",
          "**Prüfumfang:** Power Query profiliert standardmäßig nur die ersten **1000 Zeilen**. Unten auf den Hinweis zum Profiling klicken und **Gesamter Datensatz** wählen, insbesondere vor Schlüsselprüfungen oder Freigabe einer Aufbereitung. Das kann bei großen Quellen länger dauern.",
          "Auffällige Werte und ihre Quellzeilen prüfen. Nach Typumwandlung, Bereinigung oder Merge erneut profilieren, da jeder Schritt die Werte verändern kann."
        ],
        "daten": "| Kunde | Betrag |\n| --- | --- |\n| 1001 | 100 |\n| 1001 | 200 |\n| 1002 | 500 |\n\n**Aktion:** Kundenverteilung betrachten. **Ergebnis:** zwei unterschiedliche Werte, ein nur einmal vorkommender Wert (1002). Drei gültige Beträge mit Minimum 100 und Maximum 500.\n\nEin fehlerhafter Betrag erst in Zeile 1001 bleibt bei einem Profil der ersten 1000 Zeilen unentdeckt. Wechsle deshalb für die Abschlussprüfung den Umfang.",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "pq-profiling-4.webp",
        "zweck": "Profiling zeigt Fehler, Lücken und Häufigkeiten vor einer Transformation. Prüfe die vollständige Datenmenge, bevor du aus einer sauberen Vorschau auf eine saubere Quelle schließt.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    }
  ],
  "titel": "Spaltenqualität, Spaltenverteilung und Spaltenprofil",
  "kurzbeschreibung": "Profiling zeigt Fehler, Lücken und Häufigkeiten vor einer Transformation. Prüfe die vollständige Datenmenge, bevor du aus einer sauberen Vorschau auf eine saubere Quelle schließt.",
  "praxis": true,
  "zuletztGeprueft": "2026-09-23"
}
---

## Wann brauche ich das?

Profiling zeigt Fehler, Lücken und Häufigkeiten vor einer Transformation. Prüfe die vollständige Datenmenge, bevor du aus einer sauberen Vorschau auf eine saubere Quelle schließt.

## Voraussetzungen

Zugriff auf deine Datenquelle und Kenntnis ihrer Spalten und Zeilenebene. Die Beispielwerte dienen nur der Erklärung; eine Beispieldatei ist nicht erforderlich.

## Schritte

1. Im **Power Query-Editor → Ansicht** die Optionen **Spaltenqualität**, **Spaltenverteilung** und **Spaltenprofil** aktivieren.
2. **Spaltenqualität:** Gültige, fehlerhafte und leere Werte unterscheiden. Ein technisch gültiger Betrag kann fachlich trotzdem falsch sein; Fehlerwerte zunächst untersuchen statt löschen.
3. **Spaltenverteilung:** Häufigkeiten vergleichen. Unterschiedlich (distinct) zählt verschiedene Werte; eindeutig (unique) zählt Werte, die genau einmal vorkommen.
4. **Spaltenprofil:** Eine Spalte auswählen. Unten Statistik und Verteilung lesen: Anzahl, Fehler, leer sowie je Datentyp weitere Kennzahlen wie Minimum, Maximum oder Durchschnitt.
5. **Prüfumfang:** Power Query profiliert standardmäßig nur die ersten **1000 Zeilen**. Unten auf den Hinweis zum Profiling klicken und **Gesamter Datensatz** wählen, insbesondere vor Schlüsselprüfungen oder Freigabe einer Aufbereitung. Das kann bei großen Quellen länger dauern.
6. Auffällige Werte und ihre Quellzeilen prüfen. Nach Typumwandlung, Bereinigung oder Merge erneut profilieren, da jeder Schritt die Werte verändern kann.

## Beispiel

| Kunde | Betrag |
| --- | --- |
| 1001 | 100 |
| 1001 | 200 |
| 1002 | 500 |

**Aktion:** Kundenverteilung betrachten. **Ergebnis:** zwei unterschiedliche Werte, ein nur einmal vorkommender Wert (1002). Drei gültige Beträge mit Minimum 100 und Maximum 500.

Ein fehlerhafter Betrag erst in Zeile 1001 bleibt bei einem Profil der ersten 1000 Zeilen unentdeckt. Wechsle deshalb für die Abschlussprüfung den Umfang.

## Ergebnis

Technische Fehler, fehlende Werte und Mehrfachvorkommen sind sichtbar und können vor einer Transformation gezielt untersucht werden.

## Warum funktioniert das?

Häufigkeiten zeigen Mehrfachvorkommen, aber nicht deren fachliche Ursache. Ein Kundenfeld darf sich in Kontendaten wiederholen. Für eine Kundendimension wäre dieselbe Wiederholung dagegen zu klären.

## Typischer Fehler

„Eindeutig“ mit „unterschiedlich“ verwechseln oder fehlerfreie erste 1000 Zeilen als Prüfung der gesamten Quelle betrachten.

## Plausibilitätscheck

Im Beispiel 3 Zeilen, 2 verschiedene Kunden und 1 nur einmal vorkommender Kundenwert. Vor einer Eindeutigkeitsentscheidung muss der gesamte Datensatz geprüft sein.
