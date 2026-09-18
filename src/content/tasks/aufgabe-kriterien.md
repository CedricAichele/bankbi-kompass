---
{
  "id": "aufgabe-kriterien",
  "slug": "aufgabe-kriterien",
  "titel": "Mehrere Kriterien gleichzeitig anwenden",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel",
    "IDA"
  ],
  "kategorie": "Typische Aufgaben",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Formuliere jede Bedingung und entscheide bewusst zwischen UND und ODER.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Mehrere Kriterien gleichzeitig anwenden"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "zaehlenwenns"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "aufgabe",
  "screenshots": [],
  "quellen": [],
  "zuletztGeprueft": "2026-09-18"
}
---

## Wann brauche ich das?

Mehrere Kriterien gleichzeitig anwenden.

## Schritte

1. Definiere Ergebnis und Bezugseinheit vor dem Öffnen des Werkzeugs.
2. Verwende die vollständig angegebenen Demodaten der [ZÄHLENWENNS-Anleitung](#/wissen/zaehlenwenns).
3. Führe die dortigen Schritte aus. Erwartetes Ergebnis: Konten-Beispiel: P001 UND Einlagen → nur K001 mit 1.250.
4. Teste zusätzlich einen nicht passenden Datensatz und kontrolliere, dass er nicht in das Ergebnis einfließt.

## Beispiel

Konten-Beispiel: P001 UND Einlagen → nur K001 mit 1.250.

## Ergebnis

Konten-Beispiel: P001 UND Einlagen → nur K001 mit 1.250.

## Typischer Fehler

P001 ODER Einlagen würde zusätzliche Konten auswählen.

## Vergleich

Excel: ZÄHLENWENNS/SUMMEWENNS. Power Query: verknüpfte Zeilenfilter. Reporting: explizite Klammern.

## Warum funktioniert das?

Formuliere jede Bedingung und entscheide bewusst zwischen UND und ODER.

## Plausibilitätscheck

Konten-Beispiel: P001 UND Einlagen → nur K001 mit 1.250.
