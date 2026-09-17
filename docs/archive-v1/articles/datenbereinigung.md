---
{
  "id": "datenbereinigung",
  "slug": "datenbereinigung",
  "titel": "Datentypen und Daten bereinigen",
  "bereich": "Power BI",
  "kategorie": "Datenbereinigung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Korrekte Datentypen, eindeutige Schlüssel und bewusst behandelte Nullwerte sind die Grundlage verlässlicher Auswertungen.",
  "tags":
    ["Datentypen", "Dubletten", "Daten bereinigen", "Duplikate entfernen"],
  "synonyme":
    ["Datentypen", "Dubletten", "Daten bereinigen", "Duplikate entfernen"],
  "verwandteThemen": ["power-query", "granularitaet", "datenqualitaet"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Bereinigen bedeutet, erkennbare technische Unstimmigkeiten nach einer fachlich begründeten Regel zu behandeln. Es bedeutet nicht, alles Unbequeme zu löschen.

## Prüfschritte

1. Definiere, was eine Zeile beschreibt.
2. Setze IDs als Text, wenn führende Nullen relevant sind.
3. Verwende Datum statt Text für Stichtage.
4. Prüfe Dezimal- und Tausendertrennzeichen mit dem passenden Gebietsschema.
5. Zähle null, leere Texte und Fehler getrennt.

## Synthetisches Beispiel

Die Texte „01.02.2026“ und „02/01/2026“ sind ohne Gebietsschema mehrdeutig. Kontrolliere nach der Umwandlung Tag und Monat an bekannten Testwerten. Die Kennung „0012“ darf durch eine Zahlumwandlung nicht zu einem anderen fachlichen Schlüssel werden.

## Dubletten

Zwei Zeilen derselben Person können zwei verschiedene Konten sein. Erst die fachliche Schlüsselkombination entscheidet, ob eine Dublette vorliegt. Bei Konto plus Stichtag kann eine wiederholte Kombination ein Fehler sein.

## Typischer Fehler

Null durch 0 zu ersetzen ändert die Aussage von „nicht bekannt“ zu „bekannt und null“. Das wirkt sich auf Mittelwerte und Quoten aus.

## Wenn du aus Excel kommst

Eine Anzeige als Datum ändert nicht automatisch den zugrunde liegenden Texttyp. Prüfe den Typ der Spalte, nicht nur das Aussehen der Zelle.
