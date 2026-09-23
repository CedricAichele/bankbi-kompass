---
{
  "id": "problem-xverweis-falsch",
  "slug": "problem-xverweis-falsch",
  "titel": "XVERWEIS liefert falschen Datensatz",
  "bereich": "Excel",
  "werkzeuge": [
    "Excel"
  ],
  "kategorie": "Typische Probleme",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "XVERWEIS liefert einen Wert, obwohl der Schlüssel mehrfach und widersprüchlich zugeordnet ist.",
  "ort": "Siehe konkrete Vorgehensweise und Werkzeugvergleich.",
  "tags": [
    "XVERWEIS liefert falschen Datensatz"
  ],
  "synonyme": [
    "XVERWEIS liefert falschen Datensatz",
    "Ein Ergebnis erscheint, aber gehört zur falschen Zuordnung."
  ],
  "verwandteThemen": [
    "xverweis",
    "excel-mehrere-kriterien",
    "excel-filtern"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "art": "problem",
  "screenshots": [],
  "quellen": [
    "https://support.microsoft.com/en-us/excel/functions/xlookup-function"
  ],
  "zuletztGeprueft": "2026-09-23",
  "praxis": true
}
---

## Wann brauche ich das?

XVERWEIS liefert einen Wert, obwohl der Schlüssel mehrfach und widersprüchlich zugeordnet ist.

## Voraussetzungen

XVERWEIS und FILTER benötigen Microsoft 365 oder Excel 2021/2024.

## Schritte

1. Lege A1:B3 mit Konto/Bestand und K003/2000, K003/2100 an. F2 enthält K003.
2. Prüfe in G2 =ZÄHLENWENN(A2:A3;F2): zwei Treffer. Markiere außerdem Such- und Rückgabebereich, um versetzte Grenzen auszuschließen.
3. =XVERWEIS(F2;A2:A3;B2:B3;"Fehlt") in H2 liefert standardmäßig 2000. Das ist der erste Wert, keine Konfliktentscheidung.
4. Lasse die Zuordnung fachlich klären oder gib mit FILTER alle Treffer aus. Zusätzliche Merkmale nur bei begründetem [Mehrkriterien-Nachschlag](#/wissen/excel-mehrere-kriterien) verwenden.

## Beispiel

Vorher: K003 ist in A2:B3 mit **2000** und **2100** vorhanden. XVERWEIS gibt 2000 zurück.

```excel
=FILTER(A2:B3;A2:A3=F2;"Fehlt")
```

In J2 eingeben, J2:K3 außerhalb einer Excel-Tabelle freihalten: Beide Zeilen K003/2000 und K003/2100 werden sichtbar. Quellbereiche und F2 anpassen.

## Ergebnis

Die Trefferzahl 2 und die vollständige Ausgabe zeigen den Konflikt. Kein Wert wird ungeprüft als fachlich richtig freigegeben.

## Warum funktioniert das?

Der standardmäßige erste Treffer ist eine Suchregel, keine Prüfung auf fachliche Eindeutigkeit.

## Typischer Fehler

Eine Rückwärtssuche als allgemeine Lösung verwenden und damit nur den anderen Konfliktwert auswählen.

## Plausibilitätscheck

ZÄHLENWENN = 2; FILTER gibt zwei Zeilen zurück. Erst nach Quellenklärung ist ein einzelner freigegebener Rückgabewert möglich.
