---
{
  "id": "median",
  "slug": "median",
  "titel": "Median, Durchschnitt und Quoten",
  "bereich": "Datenanalyse",
  "kategorie": "Aggregation",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Durchschnitt und Median beschreiben die Mitte unterschiedlich. Quoten brauchen außerdem einen klar definierten Zähler und Nenner.",
  "tags": ["Median vs Durchschnitt", "Mittelwert", "Quote", "Laufzeit"],
  "synonyme": ["Median vs Durchschnitt", "Mittelwert", "Quote", "Laufzeit"],
  "verwandteThemen": ["laufzeitanalyse", "measure", "granularitaet"],
  "prozessBezug": [],
  "quelleTyp": "allgemeines-wissen",
  "zuletztGeprueft": "2026-09-16",
  "art": "artikel",
}
---

## 30-Sekunden-Erklärung

Der Durchschnitt teilt die Summe durch die Anzahl. Der Median liegt in der Mitte der sortierten Werte und reagiert weniger stark auf einzelne extreme Werte.

## Synthetisches Beispiel

Drei Vorgänge dauern 1, 2 und 30 Tage. Der Durchschnitt beträgt 11 Tage, der Median 2 Tage. Beides ist richtig, aber die Zahlen erzählen unterschiedliche Aspekte der Verteilung.

## Wann brauche ich das?

Der Median beschreibt eine typische mittlere Dauer. Der Durchschnitt ist hilfreich für die gesamte zeitliche Belastung, kann aber stark von langen Fällen beeinflusst werden. Zeige bei Laufzeiten zusätzlich Anzahl, Zeitraum und gegebenenfalls Streuung.

## Typischer Fehler

Stufendauern als Vorgangsdauern zu mitteln. Wenn ein Vorgang mehr Stufen hat, erhält er so mehr Gewicht. Berechne bei Bedarf erst eine fachlich korrekte Dauer pro Vorgang.

## Quoten

Bei 8 von 10 Fällen und 1 von 2 Fällen ergibt die Gesamtquote 9/12 = 75 %. Der ungewichtete Mittelwert aus 80 % und 50 % wäre 65 % und beantwortet eine andere Frage.

## Wenn du aus Excel kommst

MITTELWERT und MEDIAN sind nicht austauschbar. Leere Werte und echte Nullen müssen nach derselben fachlichen Regel behandelt werden, bevor du Ergebnisse vergleichst.
