---
{
  "id": "excel-liste-vorbereiten",
  "slug": "excel-liste-vorbereiten",
  "titel": "Excel-Liste für Auswertung vorbereiten",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Daten prüfen & bereinigen",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Bereite eine kleine Liste nachvollziehbar auf: Original erhalten, Textbeträge und Leerzeichen korrigieren, bestätigte Doppelzeilen entfernen und fehlende Pflichtschlüssel separat klären.",
  "ort": "Excel → Kopie der Quelle → Einfügen → Tabelle; Prüfspalten und Kontrollzellen",
  "tags": [
    "Excel-Liste für Auswertung vorbereiten"
  ],
  "synonyme": [
    "große liste plausibilisieren",
    "unterschiedliche formate"
  ],
  "verwandteThemen": [
    "pivottable",
    "daten-laden",
    "xverweis",
    "csv-import",
    "pq-workflow"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://support.microsoft.com/en-us/excel/get-started/create-and-format-tables"
  ],
  "screenshots": [
    {
      "src": "images/excel/excel-tabelle-erstellen.jpg",
      "alt": "Excel-Dialog Tabelle erstellen mit Bereich A1 bis D7 und aktivierten Überschriften",
      "caption": "Echter Excel-Dialog der synthetischen Demo: Bereich A1:D7, Tabelle hat Überschriften.",
      "schema": false,
      "schritt": 2,
      "hinweis": "Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen.",
      "bildAnzeigen": false
    },
    {
      "alt": "Excel-Datenprüfung vor der Auswertung mit vollständig erfundenen Daten",
      "caption": "Excel-Datenprüfung vor der Auswertung",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Passende Aufnahme zum aktuellen Ablauf mit frei erfundenen Daten ergänzen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Excel",
        "oberflaeche": "Excel-Datenprüfung vor der Auswertung",
        "klickfolge": [
          "Ziel und Zeilenebene festlegen. Entferne Titel, Leer- und Summenzeilen aus dem Datenbereich; verwende eine eindeutige Überschriftenzeile ohne verbundene Zellen.",
          "Innerhalb des zusammenhängenden Bereichs **Einfügen → Tabelle** oder **Strg+T** wählen, Bereich und Tabelle hat Überschriften bestätigen.",
          "Unter **Tabellenentwurf → Tabellenname** einen sprechenden Namen vergeben. Neue Zeilen innerhalb der Tabelle ergänzen.",
          "Kennungen als Text erhalten, Beträge als Zahlen und Datum als Datum prüfen. **[Textzahlen erkennen](#/wissen/excel-zahl-text)** und **[Datumswerte korrigieren](#/wissen/excel-datum)** zeigen die unterschiedlichen Fehlerbilder.",
          "**[Leerzeichen und Steuerzeichen bereinigen](#/wissen/glaetten)** und **[Duplikate prüfen](#/wissen/excel-dubletten-finden)**. Fehlende Pflichtschlüssel getrennt untersuchen; leere optionale Felder nicht blind durch 0 ersetzen.",
          "Zeilenzahl und eine Kontrollsumme festhalten. Für wiederkehrende Lieferungen **[Excel Power Query](#/wissen/excel-power-query)** verwenden, für die anschließende flexible Auswertung eine **[PivotTable](#/wissen/pivottable)**."
        ],
        "daten": "### Vorher · Beispieldaten\n\n| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |\n\n### Aktion\n\nA1:C4 in die Excel-Tabelle Konten umwandeln.\n\n### Nachher · Beispielergebnis\n\n| Beispielergebnis |\n| --- |\n| Dieselben drei Datenzeilen mit Tabellenüberschriften und Filterpfeilen. |",
        "sichtbar": [
          "Überschriften und Werte des aktuellen Artikelbeispiels",
          "Einstellung und Ergebnis des zugeordneten Schritts"
        ],
        "ausschnitt": "Nur relevante Editorbereiche, Datenvorschau und beschriebene Einstellung lesbar aufnehmen.",
        "dateiname": "excel-liste-vorbereiten-4.webp",
        "zweck": "Eine Auswertung braucht eine rechteckige Liste mit einer Kopfzeile, konsistenten Typen und einer klaren Zeilenebene.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzerprofile und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      },
      "bildAnzeigen": false
    }
  ],
  "praxis": true,
  "schnellschritte": [
    "Rechteckigen Datenbereich mit einer Kopfzeile vorbereiten.",
    "Mit Strg+T als Tabelle anlegen und benennen.",
    "Zeilenzahl und Kontrollsumme vor der Weiterverarbeitung prüfen."
  ]
}
---

## Wann brauche ich das?

Bereite eine kleine Liste nachvollziehbar auf: Original erhalten, Textbeträge und Leerzeichen korrigieren, bestätigte Doppelzeilen entfernen und fehlende Pflichtschlüssel separat klären.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Bewahre das Blatt Original unverändert. Arbeite auf einer Kopie; protokolliere Eingangszeilen und die zunächst numerisch erfasste Summe. Hier gilt eine Zeile je Konto am selben Stichtag.
2. Verwende genau eine Überschriftenzeile ohne verbundene Zellen, Leer- oder Summenzeilen im Bereich. Markiere A1:D6 → Einfügen → Tabelle (Strg+T), Tabelle hat Überschriften. Nenne sie Eingang.
3. Prüfe [Zahlen als Text](#/wissen/excel-zahl-text): D3 ist bestätigter Text „200,00“. Wandle diesen Betrag in einer Hilfsspalte mit ZAHLENWERT um; erhaltene numerische Beträge übernehmen. Kunde und Konto bleiben Text.
4. Bereinige Ort in einer Hilfsspalte mit =GROSS(GLÄTTEN(C2)) und kopiere nach unten. [Textbereinigung](#/wissen/glaetten) erklärt Leerzeichen und Steuerzeichen. Alle fünf Zeilen ergeben MANNHEIM.
5. Prüfe [fehlende Werte](#/wissen/excel-leere-zellen) und [Dubletten](#/wissen/excel-dubletten-finden). Zeile 5 wurde anhand der Lieferung als echte Wiederholung von Zeile 2 bestätigt. Zeile 6 hat keinen Pflichtschlüssel Konto: in einer separaten Prüfliste behalten und aus der freigegebenen Auswertung ausschließen.
6. Erzeuge eine bereinigte Ergebnistabelle mit Zeilen 2, 3 und 4. Lösche nicht die zwei unterschiedlichen Konten von P001. Führe ein separates Ausschlussprotokoll mit Ursprungszeile und Grund.
7. Gleiche Zeilen und Beträge ab: fünf Eingangszeilen = drei gültige + eine bestätigte Dublette + eine offene Prüfzeile. Die vor Typkorrektur angezeigte Summe ist nicht die vollständige Ausgangssumme.
8. Wähle [Formeln für Zelllogik und Zuordnung](#/wissen/xverweis), [PivotTables für Auswertung](#/wissen/pivottable) oder [Power Query für wiederkehrende Aufbereitung](#/wissen/excel-power-query).

## Beispiel

### Original · A1:D6, gemeinsamer Stichtag 31.01.2026

| Zeile | A: Kunde | B: Konto | C: Ort | D: Bestand |
| --- | --- | --- | --- | --- |
| 2 | P001 | K001 | „ Mannheim “ | 100 (Zahl) |
| 3 | P001 | K002 | „MANNHEIM“ | „200,00“ (Text) |
| 4 | P002 | K003 | „mannheim“ | 500 (Zahl) |
| 5 | P001 | K001 | „ Mannheim “ | 100 (Zahl; bestätigte Doppelzeile) |
| 6 | P003 | fehlt | „Mannheim“ | 50 (Zahl; offen) |

Die Anführungszeichen kennzeichnen hier Text und gehören nicht zum Wert. Textbetrag zum Nachbauen mit führendem Apostroph eingeben. Original enthält **5 Zeilen**; =SUMME(D2:D6) liefert **750**, weil der Textbetrag fehlt. Nach seiner Umwandlung beträgt die Summe aller fünf Zeilen **950**.

### Freigegebenes Ergebnis

| Kunde | Konto | Ort | Bestand |
| --- | --- | --- | ---: |
| P001 | K001 | MANNHEIM | 100 |
| P001 | K002 | MANNHEIM | 200 |
| P002 | K003 | MANNHEIM | 500 |

### Ausschlussprotokoll

| Ursprungszeile | Betrag | Status |
| --- | ---: | --- |
| 5 | 100 | Bestätigte Wiederholung von Zeile 2 |
| 6 | 50 | Pflichtschlüssel Konto fehlt; separat klären, nicht als 0 ersetzen |

## Ergebnis

Drei gültige Kontenzeilen mit zwei Kunden und Bestand 800. Eine Doppelzeile mit 100 und eine offene Prüfzeile mit 50 sind separat nachgewiesen.

## Warum funktioniert das?

Typkorrektur, fachliche Dublettenentscheidung und Ausschluss wegen fehlender Schlüssel sind getrennte Schritte. Der vollständige Abstimmweg bleibt erhalten.

## Typischer Fehler

Kunde als alleinigen Dublettenschlüssel verwenden und K002 von P001 löschen oder die offene Prüfzeile still verschwinden lassen.

## Plausibilitätscheck

750 + 200 Textbetrag = 950 geprüfter Eingang. 950 − 100 Doppelzeile − 50 offener Fall = 800 freigegeben. 5 = 3 + 1 + 1 Zeilen. Jeder Originalwert ist einer Ausgabe oder einem Prüfstatus zugeordnet.
