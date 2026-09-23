---
{
  "id": "pq-benutzerdefiniert",
  "slug": "pq-benutzerdefiniert",
  "titel": "Benutzerdefinierte Spalte",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI",
    "Excel"
  ],
  "kategorie": "Power Query & Datenaufbereitung",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Ergänze berechnete Werte mit einem M-Ausdruck: zehn praktische Beispiele für Text, Datum, Zahlen, Bedingungen und Fehlerbehandlung – jeweils mit Eingabe, Ergebnis und Anpassung.",
  "ort": "Power Query → Spalte hinzufügen → Benutzerdefinierte Spalte",
  "tags": [
    "Benutzerdefinierte Spalte"
  ],
  "synonyme": [
    "benutzerdefinierte spalte"
  ],
  "verwandteThemen": [
    "pq-bedingt",
    "berechnete-spalte",
    "power-query-oder-dax",
    "measure-spalte",
    "power-query-m"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-23",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-query/add-custom-column"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power Query-Editor – Benutzerdefinierte Spalte",
      "caption": "Geplante Aufnahme: Power Query – Benutzerdefinierte Spalte",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Bedienort und Auswahl für Benutzerdefinierte Spalte zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power Query – Benutzerdefinierte Spalte",
        "klickfolge": [
          "Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.",
          "Spalte hinzufügen → Benutzerdefinierte Spalte öffnen.",
          "Name Wert; Formel [Menge] * [Preis] eingeben. Vor OK aufnehmen."
        ],
        "daten": "| Menge | Preis |\n| --- | --- |\n| 2 | 10 |\n| 3 | 20 |",
        "sichtbar": [
          "Name Wert, Formel und Liste verfügbarer Spalten"
        ],
        "ausschnitt": "Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.",
        "dateiname": "pbi-pq-benutzerdefiniert.webp",
        "zweck": "Bedienort und Auswahl für Benutzerdefinierte Spalte zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Du möchtest beim Aufbereiten für jede Zeile einen Wert berechnen. Die Spalte wird beim Aktualisieren berechnet und reagiert später nicht auf Slicer wie ein Measure.

## Voraussetzungen

Die verwendeten Spalten sind vorhanden; Datentypen und fachliche Bedeutung sind geklärt. Alle folgenden Beispiele sind voneinander unabhängig und synthetisch.

## Schritte

1. Öffne im Power Query Editor die zu bearbeitende Tabelle und kontrolliere die Eingabespalten und Typen.
2. Wähle **Spalte hinzufügen → Benutzerdefinierte Spalte**.
3. Vergib den Namen der Ergebnisspalte. Ersetze in der Formel die Spaltennamen durch deine eigenen Namen.
4. Gib nur den Ausdruck ein, beispielsweise **[Menge] * [Preis]**, ohne führendes Gleichheitszeichen und ohne Table.AddColumn. Bestätige mit OK.
5. Setze den Ergebnistyp, prüfe typische Werte, Grenzfälle und Fehler und lade erst danach.

## Beispiel

### Zehn Ausdrücke zum Anpassen

**Eingabeort für alle zehn Beispiele:** Spalte hinzufügen → Benutzerdefinierte Spalte. Eckige Klammern verweisen auf vorhandene Spalten; Namen und Groß-/Kleinschreibung müssen exakt stimmen.

### Text vereinheitlichen

**Ausgangswert:** Ort: " mannheim ", "Mannheim", "MANNHEIM"

```m
Text.Upper(Text.Trim([Ort]))
```

**Ergebnis:** Dreimal MANNHEIM

**Was anpassen?** [Ort] durch deine Textspalte ersetzen.

**Wann und warum?** Vor Zuordnungen unterschiedliche Schreibweisen bereinigen. Von innen nach außen: Text.Trim entfernt zuerst äußere Leerzeichen; Text.Upper erhält das bereinigte Ergebnis und schreibt es groß.

### Zeilenbetrag berechnen

**Ausgangswert:** Menge = 2, Preis = 10

```m
[Menge] * [Preis]
```

**Ergebnis:** 20

**Was anpassen?** Beide Zahlenspalten ersetzen.

**Wann und warum?** Einen Betrag aus Menge und Einzelpreis bilden; null-Werte und negative Mengen fachlich prüfen.

### Monatsultimo bilden

**Ausgangswert:** Datum = 23.09.2026, Typ Datum

```m
Date.EndOfMonth([Datum])
```

**Ergebnis:** 30.09.2026

**Was anpassen?** [Datum] ersetzen.

**Wann und warum?** Datumswerte einem gemeinsamen Monatsende zuordnen. Das erzeugte Datum muss zur fachlichen Stichtagsdefinition passen.

### Jahr aus Datumstext

**Ausgangswert:** DatumText = "23.09.2026"

```m
Date.Year(Date.From([DatumText], "de-DE"))
```

**Ergebnis:** 2026

**Was anpassen?** Spalte und Quellgebietsschema ersetzen.

**Wann und warum?** Zuerst wandelt Date.From den Text in ein Datum um. Date.Year liest danach das Jahr aus diesem Datum.

### Feste Kennungslänge

**Ausgangswert:** Nummer = "12345", Typ Text

```m
Text.PadStart([Nummer], 8, "0")
```

**Ergebnis:** „000“ gefolgt von „12345“ als zusammenhängender achtstelliger Text.

**Was anpassen?** Spalte, bekannte Ziellänge 8 und Füllzeichen ersetzen.

**Wann und warum?** Nur bei fachlich festgelegter Länge. IDs direkt als Text laden; die ursprüngliche Länge lässt sich aus einer Zahl nicht erraten.

### Bestandsklasse

**Ausgangswert:** Bestand = 25000

```m
if [Bestand] > 100000 then "Hoch"
else if [Bestand] > 10000 then "Mittel"
else "Niedrig"
```

**Ergebnis:** "Mittel"

**Was anpassen?** Spalte, Grenzwerte und alle drei Bezeichnungen ersetzen.

**Wann und warum?** Klassen mit klaren Grenzen bilden. Jede if-Bedingung braucht ein else; bei genau 100000 gilt hier Mittel.

### Erlaubte Produkte

**Ausgangswert:** Produkt = "B"

```m
if List.Contains({"A", "B", "C"}, [Produkt])
then "Erlaubt" else "Prüfen"
```

**Ergebnis:** "Erlaubt"

**Was anpassen?** Liste, Spalte und Ergebnistexte ersetzen.

**Wann und warum?** Mehrere zulässige Werte übersichtlich prüfen; null ergibt hier Prüfen.

### Fehlenden Wert kennzeichnen

**Ausgangswert:** Wert = null

```m
if [Wert] = null then "Fehlt" else "Vorhanden"
```

**Ergebnis:** "Fehlt"

**Was anpassen?** Spalte und Ergebnistexte ersetzen.

**Wann und warum?** Datenqualität sichtbar machen, ohne fehlende Werte automatisch zu 0 umzudeuten.

### Textzahl kontrolliert umwandeln

**Ausgangswert:** Wert = "1.234,56" beziehungsweise "unbekannt"

```m
try Number.FromText([Wert], "de-DE") otherwise null
```

**Ergebnis:** 1234.56 beziehungsweise null

**Was anpassen?** Spalte, Quellgebietsschema und erlaubten Ersatzwert ersetzen.

**Wann und warum?** Vorher Ursache untersuchen und fehlerhafte Eingaben separat zählen; sonst verschwinden Datenprobleme im null-Ergebnis.

### Quote mit Nennerprüfung

**Ausgangswert:** Zähler = 25, Nenner = 100; alternativ Nenner = 0

```m
if [Nenner] = null or [Nenner] = 0 then null
else [Zähler] / [Nenner]
```

**Ergebnis:** 0.25 beziehungsweise null

**Was anpassen?** Beide Zahlenspalten und fachlich erlaubtes Verhalten bei fehlendem oder nullwertigem Nenner ersetzen.

**Wann und warum?** Ein gültiger Quotient kann später als 25 % formatiert werden. try [Zähler] / [Nenner] otherwise null allein genügt nicht: Division durch 0 kann #infinity oder #nan statt eines abfangbaren Fehlers liefern.

## Ergebnis

Eine zusätzliche Spalte enthält je Zeile den berechneten Wert. Im Mengenbeispiel ergeben 2 × 10 den Wert 20; 3 × 20 ergeben 60. Beide Zeilen zusammen ergeben 80.

## Warum funktioniert das?

Die Oberfläche erzeugt einen Table.AddColumn-Schritt. Im Dialog lieferst du nur dessen Ausdruck für die einzelne Zeile. Verschachtelte Funktionen werden von innen nach außen gelesen. Die [M-Referenz](#/wissen/power-query-m) zeigt auch die Formelleiste und vollständige let/in-Abfragen.

## Bedingte Spalte oder benutzerdefinierte Spalte?

**Bedingte Spalte:** einfache Wenn-dann-Regeln wie Bestand > 0 über die Oberfläche. **Benutzerdefinierte Spalte:** mehrere Funktionen, Verschachtelungen oder komplexere Logik. **Spalte aus Beispielen:** unter Spalte hinzufügen einige Zielwerte vorgeben, etwa Textausschnitte oder Datumsbestandteile, und den abgeleiteten Schritt anschließend an weiteren Werten prüfen.

## Typischer Fehler

Eine Formel mit fremden Spaltennamen blind kopieren, Table.AddColumn in den Spaltendialog eingeben oder Fehler ohne Kontrolle durch null ersetzen. M ist case-sensitive und verwendet Kommas als Argumenttrenner.

## Plausibilitätscheck

Vergleiche Ausgangswerte und Ergebnis in mehreren Zeilen. Prüfe null, leere Texte, falsche Typen, Grenzwerte und Nenner 0. Die Zeilenzahl sollte durch das Hinzufügen einer Spalte unverändert bleiben. Kontrolliere den Ergebnistyp und neue Fehlerwerte im gesamten Datensatz.
