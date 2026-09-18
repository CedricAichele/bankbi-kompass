---
{
  "id": "dubletten",
  "slug": "dubletten",
  "titel": "Dubletten prüfen und entfernen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Daten vorbereiten",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Erst die fachliche Schlüsselkombination bestimmt, ob zwei Zeilen wirklich doppelt sind.",
  "ort": "Power Query → Schlüsselspalten markieren → Zeilen entfernen → Duplikate entfernen",
  "tags": [
    "Dubletten prüfen und entfernen",
    "Kundenanalyse",
    "Datenqualität",
    "Grundbegriff"
  ],
  "synonyme": [
    "mehrere konten pro kunde",
    "falsche summe",
    "eine Liste ohne doppelte Werte",
    "mehrere Zeilen",
    "Dubletten",
    "doppelte kunden",
    "duplikate",
    "doppelte personen",
    "summe stimmt nicht"
  ],
  "verwandteThemen": [
    "granularitaet",
    "eins-zu-viele",
    "excel-dubletten-finden"
  ],
  "kontexte": [
    "Kundenanalyse",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-18",
  "art": "artikel",
  "quellen": [],
  "screenshots": []
}
---



## Wann brauche ich das?

Du siehst wiederholte Personen oder zu hohe Summen.

## Schritte

1. Zeilenebene definieren, z. B. Konto plus Stichtag.
2. Mehrfachkombinationen prüfen; unterschiedliche Werte nicht blind löschen.
3. Nur bestätigte Dubletten entfernen und Anzahl vorher/nachher vergleichen.

## Beispiel

P001 mit K-A und K-B sind zwei gültige Konten. K-A am gleichen Stichtag zweimal kann eine Dublette sein.

## Typischer Fehler

Nicht darauf vertrauen, dass bei widersprüchlichen Zeilen ohne weitere Regel gerade die gewünschte Zeile erhalten bleibt.

## Einfach erklärt

Eine Dublette ist nur bezogen auf den fachlichen Schlüssel ein Duplikat. Distinct liefert unterschiedliche Werte oder Zeilen.

## Mini-Beispiel

Zwei Konten derselben Person sind keine doppelten Konten.

## Warum ist das wichtig?

Die Definition bestimmt, welche Zuordnung oder Berechnung fachlich zulässig ist. Nur nach Person Dubletten entfernen und dabei ein echtes Konto verlieren.

## Wo taucht das auf?

Excel EINDEUTIG, Dublettenprüfung und DISTINCTCOUNT.

## Ergebnis

P001 darf nach der Prüfung weiterhin zwei unterschiedliche Konten besitzen. Entferne nur die bestätigte Wiederholung desselben Kontos am selben Stichtag; protokolliere entfernte Zeilen und die Änderung der Summe.
