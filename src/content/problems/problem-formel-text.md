---
{
  "id": "problem-formel-text",
  "slug": "problem-formel-text",
  "titel": "Formel wird als Text angezeigt",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Die Zelle zeigt die eingegebene Formel statt ihres berechneten Ergebnisses. Unterscheide Textformat, ein führendes Apostroph und die Anzeige aller Formeln.",
  "ort": "Excel → Start → Zahlenformat; Formel bearbeiten; Formeln → Formeln anzeigen",
  "tags": [
    "Formel wird als Text angezeigt"
  ],
  "synonyme": [
    "Formel wird als Text angezeigt",
    "Die Zelle zeigt =SUMME(...) statt eines Ergebnisses."
  ],
  "verwandteThemen": [
    "excel-fehler"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/how-to-avoid-broken-formulas-in-excel",
    "https://support.microsoft.com/en-us/excel/display-or-hide-formulas"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

Die Zelle zeigt die eingegebene Formel statt ihres berechneten Ergebnisses. Unterscheide Textformat, ein führendes Apostroph und die Anzeige aller Formeln.

## Voraussetzungen

Arbeite mit einer Kopie oder separaten Ergebniszellen. Die Beispiele sind synthetisch; Formeln gelten für deutsches Excel.

## Schritte

1. Prüfe, ob alle Formelzellen oder nur einzelne betroffen sind. Bei allen: Formeln → Formeln anzeigen ausschalten. Das ändert nur die Darstellung.
2. Bei einer einzelnen Zelle prüfe in der Bearbeitungsleiste ein führendes Apostroph. Es macht die Eingabe zu Text; entferne es, wenn eine Formel gemeint ist.
3. War die Zelle beim Eingeben als Text formatiert, stelle Start → Zahlenformat auf Standard. Bestätige die vorhandene Eingabe danach mit F2 → Enter erneut.
4. Kontrolliere in einer separaten Testzelle =1+1. Nach der Korrektur muss dort 2 stehen; in der Bearbeitungsleiste bleibt die Formel sichtbar.

## Beispiel

### Vorher · Fehlerbild

A2 wurde als Text formatiert. Die danach eingegebene Zeichenfolge **=1+1** erscheint unverändert in A2. Alternativ führt ein Apostroph vor =1+1 zum gleichen sichtbaren Text.

### Korrektur

Textformat: Standard wählen → F2 → Enter. Apostroph: führendes Apostroph entfernen und bestätigen. Sind alle Formeln eingeblendet, nur den Anzeigemodus ausschalten.

### Nachher

A2 zeigt **2**. Die Bearbeitungsleiste zeigt weiterhin **=1+1**.

## Ergebnis

Die reparierte Formelzelle zeigt 2 statt =1+1.

## Warum funktioniert das?

Die erneute Bestätigung lässt Excel eine bisherige Texteingabe als Formel interpretieren. Formeln anzeigen verändert dagegen keine Berechnung und keinen Zelltyp.

## Typischer Fehler

Nur das Zahlenformat ändern oder eine Zahltext-Umwandlung wie ZAHLENWERT auf Formeltext anwenden.

## Plausibilitätscheck

=1+1 zeigt 2; eine weitere funktionierende Formel bleibt korrekt. Bei ausgeschaltetem Formeln-anzeigen-Modus werden wieder die Ergebnisse angezeigt.
