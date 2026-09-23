---
{
  "id": "schluessel-oder-join",
  "slug": "schluessel-oder-join",
  "titel": "Schlüssel bereinigen oder Join ändern?",
  "bereich": "Werkzeugübergreifend",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Werkzeugwahl",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Formatfehler beheben; fachliche Mehrdeutigkeit modellieren. Schlüsselbereinigung und Änderung der Join-Logik lösen unterschiedliche Anforderungen.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "Schlüssel bereinigen oder Join ändern?"
  ],
  "synonyme": [],
  "verwandteThemen": [
    "schluessel",
    "zusammenfuehren"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "artikel",
  "screenshots": [],
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/guidance/star-schema",
    "https://learn.microsoft.com/en-us/power-query/merge-queries-overview"
  ],
  "zuletztGeprueft": "2026-09-21",
  "praxis": true
}
---

## Wann brauche ich das?

Du entscheidest, welche Umsetzung zur gewünschten Ergebnisform passt.

## Schritte

1. Formuliere die Einheit einer Ergebniszeile und den Aktualisierungsbedarf.
2. Nimm **Schlüsselbereinigung**, wenn dieselbe fachliche Kennung nur durch Typen, Leerzeichen oder Schreibweise abweicht.
3. Nimm **Änderung der Join-Logik**, wenn die Beziehung fachlich weitere Kriterien oder mehrere Zuordnungen benötigt.
4. Baue das Mini-Beispiel mit der gewählten Methode nach und prüfe die beschriebene Fehlerquelle.

## Beispiel

### Ausgangslage und Entscheidung

K003 mit Leerzeichen bereinigen. Kontobestand über Konto und Stichtag statt Konto allein zuordnen.

| Alternative | Geeignet, wenn |
| --- | --- |
| Schlüsselbereinigung | dieselbe fachliche Kennung nur durch Typen, Leerzeichen oder Schreibweise abweicht. |
| Änderung der Join-Logik | die Beziehung fachlich weitere Kriterien oder mehrere Zuordnungen benötigt. |

## Typischer Fehler

Echte Mehrfachbeziehungen nicht durch willkürliches Löschen einer Seite verschleiern.

## Merksatz

Formatfehler beheben; fachliche Mehrdeutigkeit modellieren.

## Warum funktioniert das?

Die Entscheidung richtet sich nach dem benötigten Ergebnis. Nimm **Schlüsselbereinigung**, wenn dieselbe fachliche Kennung nur durch Typen, Leerzeichen oder Schreibweise abweicht. Nimm **Änderung der Join-Logik**, wenn die Beziehung fachlich weitere Kriterien oder mehrere Zuordnungen benötigt.

## Ergebnis

Das gewählte Verfahren liefert die benötigte Ergebnisform; Detailtiefe und Aktualisierungsbedarf sind ausdrücklich berücksichtigt.

## Plausibilitätscheck

Echte Mehrfachbeziehungen nicht durch willkürliches Löschen einer Seite verschleiern. Prüfe die Entscheidung an einer bekannten Eingabe, bevor du den Umfang erweiterst.
