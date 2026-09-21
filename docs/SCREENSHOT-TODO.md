# Screenshot-Arbeitsliste für Cedric

Stand: 21.09.2026. In diesem Qualitätspass wurden keine neuen Bilder aufgenommen und keine Bilddateien verändert. Ausschließlich frei erfundene Aufnahmedaten verwenden. Die allgemeinen Anleitungen erfordern keine Beispieldateien.

Die Aufträge sind nach Power BI hoch, Excel hoch, Power BI mittel, Excel mittel und Rest sortiert. Menübezeichnungen können je Programmversion leicht abweichen. Vor jeder Aufnahme prüfen, dass alle genannten Einstellungen sichtbar und lesbar sind. Markdown-Markierungen in Klickfolgen sind Hervorhebungen, keine Eingabetexte.

## 001 – Abfrage duplizieren oder referenzieren · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Abfrage duplizieren oder referenzieren](../src/content/articles/pq-duplizieren.md) (ID: pq-duplizieren)
- Benötigte Oberfläche: Power Query – Abfrage duplizieren oder referenzieren
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-pq-duplizieren.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Eine Abfrage Konten auswählen.
3. Rechtsklick auf Konten; Menü mit Duplizieren und Verweis geöffnet lassen.

### Synthetische Aufnahmedaten

| Abfrage | Schritte |
| --- | --- |
| Konten | Quelle → Typen → Filter |

### Sichtbar und lesbar

- Abfragename, Duplizieren und Verweis gleichzeitig

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 002 – Bedingte Spalte · Schritt 4

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Bedingte Spalte](../src/content/articles/pq-bedingt.md) (ID: pq-bedingt)
- Benötigte Oberfläche: Power Query – Bedingte Spalte
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-pq-bedingt.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Spalte hinzufügen → Bedingte Spalte öffnen.
3. Name Kategorie; Bestand ist größer als 1000; Ausgabe hoch; Sonst niedrig. Vor OK aufnehmen.

### Synthetische Aufnahmedaten

| Bestand |
| --- |
| 500 |
| 1000 |
| 1500 |

### Sichtbar und lesbar

- Komplette Regel einschließlich Sonst und Grenzwert

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Bedienort und Auswahl für Bedingte Spalte zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 003 – Benutzerdefinierte Spalte · Schritt 4

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Benutzerdefinierte Spalte](../src/content/articles/pq-benutzerdefiniert.md) (ID: pq-benutzerdefiniert)
- Benötigte Oberfläche: Power Query – Benutzerdefinierte Spalte
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-pq-benutzerdefiniert.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Spalte hinzufügen → Benutzerdefinierte Spalte öffnen.
3. Name Wert; Formel [Menge] * [Preis] eingeben. Vor OK aufnehmen.

### Synthetische Aufnahmedaten

| Menge | Preis |
| --- | --- |
| 2 | 10 |
| 3 | 20 |

### Sichtbar und lesbar

- Name Wert, Formel und Liste verfügbarer Spalten

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Bedienort und Auswahl für Benutzerdefinierte Spalte zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 004 – Beziehung erstellen · Schritt 4

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Beziehung erstellen](../src/content/articles/beziehungen.md) (ID: beziehungen)
- Benötigte Oberfläche: Power BI – Beziehung erstellen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-beziehungen.webp`

### Vorbereitung und genaue Klickfolge

1. Lade die benötigte Dimension und Faktentabelle. Prüfe die Schlüsselspalten auf denselben Datentyp und dieselbe fachliche Bedeutung.
2. Prüfe **DimKunde[Kunde]**: Jeder Schlüssel muss genau einmal vorkommen. In FaktKonten darf ein Kunde mehrfach vorkommen.
3. Öffne links die **Modellansicht**, dann **Modellierung → Beziehungen verwalten → Neu**. Wähle DimKunde und FaktKonten mit jeweils der Spalte Kunde.
4. Stelle die Kardinalität auf **Eins-zu-Viele (1:*)**, die Kreuzfilterrichtung auf **Einfach** und die Beziehung auf **aktiv**. Prüfe, welche Tabelle tatsächlich auf der 1-Seite steht.

### Synthetische Aufnahmedaten

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Sichtbar und lesbar

- Tabellennamen und Schlüssel
- 1/* und Filterpfeil beziehungsweise Prüfdialog

**Ausschnitt:** Power BI – Beziehung erstellen mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Die relevante Modellstruktur und Einstellung lesbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 005 – CSV korrekt importieren · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [CSV korrekt importieren](../src/content/articles/csv-import.md) (ID: csv-import)
- Benötigte Oberfläche: Importdialog – CSV korrekt importieren
- Bestehenden Screenshot ersetzen: **Ja** – `images/power-bi/pbi-csv-import.webp`
- Gewünschter Dateiname: `pbi-csv-import.webp`

### Vorbereitung und genaue Klickfolge

1. Wähle in Power BI **Start → Daten abrufen → Text/CSV** und die gewünschte Datei.
2. Prüfe die Vorschau. Wähle **Semikolon** als Trennzeichen für das Beispiel. Stelle den Dateiursprung passend zur tatsächlichen Codierung ein, zum Beispiel **UTF-8**, wenn die Datei so gespeichert wurde.
3. Setze die Datentyperkennung möglichst auf **Datentypen nicht erkennen**, damit Kennungen zunächst Text bleiben. Wähle **Daten transformieren**.

### Synthetische Aufnahmedaten

```text
Konto;Betrag;Datum
00123;1.250,50;31.01.2026
00124;20,00;01.02.2026
```

### Sichtbar und lesbar

- Setze die Datentyperkennung möglichst auf **Datentypen nicht erkennen**, damit Kennungen zunächst Text bleiben. Wähle **Daten transformieren**.
- Spaltenüberschriften und zugehörige Ausgangswerte

**Ausschnitt:** Importdialog – CSV korrekt importieren mit Semikolon lesen, Kennung als Text erhalten, deutsche Zahl und Datum umwandeln., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Zu viel Leerfläche und kleine Schrift; automatische Typerkennung ist aktiv. Neue Aufnahme muss Kennungen mit führenden Nullen und deaktivierte Typerkennung zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 006 – Daten laden / importieren · Schritt 2

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Daten laden / importieren](../src/content/articles/daten-laden.md) (ID: daten-laden)
- Benötigte Oberfläche: Power BI – Daten abrufen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-daten-abrufen.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen.
2. Start → Daten abrufen → Mehr… öffnen.

### Synthetische Aufnahmedaten

| Konto | Bestand |
| --- | --- |
| K001 | 1000 |
| K002 | 2000 |

### Sichtbar und lesbar

- Connectorliste
- Suchfeld
- Excel, Text/CSV und Datenbankkategorien

**Ausschnitt:** Power BI – Daten abrufen mit Connectorliste, Suchfeld, Excel, Text/CSV und Datenbankkategorien. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Zeigen, dass zahlreiche Quelltypen verfügbar sind.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 007 – Datentyp ändern / Daten bereinigen · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Datentyp ändern / Daten bereinigen](../src/content/articles/datenbereinigung.md) (ID: datenbereinigung)
- Benötigte Oberfläche: Power Query-Editor – Datentyp ändern / Daten bereinigen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-datenbereinigung.webp`

### Vorbereitung und genaue Klickfolge

1. Markiere die betreffende Spalte. Klicke auf das **Datentypsymbol links im Spaltenkopf** oder nutze **Transformieren → Datentyp**.
2. Wähle für Schlüssel **Text**, für Beträge einen passenden Zahlentyp und für Kalendertage **Datum**.
3. Bei länderspezifischen Texten verwende **Datentyp → Mit Gebietsschema**: hier Dezimalzahl beziehungsweise Datum mit **Deutsch (Deutschland)**.

### Synthetische Aufnahmedaten

| Kennung als Zahl | Betrag als Text | Datum als Text |
| --- | --- | --- |
| 123 | 1.250,50 | 31.01.2026 |

### Sichtbar und lesbar

- Ursprüngliche Kennung "00123" aus der Quelle als Text erhalten; Betrag und Datum passend interpretieren.
- Spaltenüberschriften und relevante Optionen

**Ausschnitt:** Power Query-Editor – Datentyp ändern / Daten bereinigen mit Ursprüngliche Kennung "00123" aus der Quelle als Text erhalten; Betrag und Datum passend interpretieren., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 008 – Datum in Power Query transformieren · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Datum in Power Query transformieren](../src/content/articles/pq-datum.md) (ID: pq-datum)
- Benötigte Oberfläche: Power Query-Editor – Datum in Power Query transformieren
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-pq-datum.webp`

### Vorbereitung und genaue Klickfolge

1. Markiere **Zeitstempel** und stelle **Datum/Uhrzeit** mit dem passenden Gebietsschema ein.
2. Soll die Uhrzeit erhalten bleiben, wähle **Spalte hinzufügen → Datum → Nur Datum**. Für eine Umwandlung derselben Spalte nutze das Register Transformieren.
3. Nenne die neue Spalte **Datum** und setze sie auf Datentyp Datum.

### Synthetische Aufnahmedaten

| Zeitstempel |
| --- |
| 31.01.2026 14:30:00 |
| 01.02.2026 09:15:00 |

### Sichtbar und lesbar

- Aus Zeitstempel eine zusätzliche Datumsspalte ableiten.
- Spaltenüberschriften und relevante Optionen

**Ausschnitt:** Power Query-Editor – Datum in Power Query transformieren mit Aus Zeitstempel eine zusätzliche Datumsspalte ableiten., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 009 – Dubletten prüfen und entfernen · Schritt 5

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Dubletten prüfen und entfernen](../src/content/articles/dubletten.md) (ID: dubletten)
- Benötigte Oberfläche: Power Query – Dubletten prüfen und entfernen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-dubletten.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Konto und Stichtag mit Strg gemeinsam markieren.
3. Start → Zeilen entfernen öffnen; Duplikate entfernen noch nicht ausführen.

### Synthetische Aufnahmedaten

| Kunde | Konto | Stichtag | Bestand |
| --- | --- | --- | --- |
| P001 | K001 | 31.01.2026 | 1000 |
| P001 | K001 | 31.01.2026 | 1000 |
| P001 | K002 | 31.01.2026 | 2000 |

### Sichtbar und lesbar

- Beide markierten Schlüsselspalten; Option Duplikate entfernen

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Bedienort und Auswahl für Dubletten prüfen und entfernen zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 010 – Entpivotieren: von breit nach lang · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Entpivotieren: von breit nach lang](../src/content/articles/entpivotieren.md) (ID: entpivotieren)
- Benötigte Oberfläche: Power Query – Entpivotieren: von breit nach lang
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-entpivotieren.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Kunde als Schlüsselspalte markieren.
3. Transformieren → Spalten entpivotieren öffnen, Option Andere Spalten entpivotieren sichtbar lassen.

### Synthetische Aufnahmedaten

| Kunde | Jan | Feb |
| --- | --- | --- |
| P001 | 10 | 15 |
| P002 | 20 | 25 |

### Sichtbar und lesbar

- Kunde markiert; Jan und Feb als Wertespalten; Menüoption

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Bedienort und Auswahl für Entpivotieren: von breit nach lang zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 011 – Excel-Datei importieren · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Excel-Datei importieren](../src/content/articles/excel-import.md) (ID: excel-import)
- Benötigte Oberfläche: Importdialog – Excel-Datei importieren
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-excel-import.webp`

### Vorbereitung und genaue Klickfolge

1. Wähle **Start → Daten abrufen → Excel-Arbeitsmappe** und die Datei.
2. Unterscheide im **Navigator** die benannte Tabelle **Konten** vom Arbeitsblatt **Bericht**. Eine Tabelle besitzt definierte Überschriften und einen zusammenhängenden Datenbereich.
3. Wähle möglichst die benötigte benannte Tabelle und prüfe die Vorschau. Ein ganzes Blatt kann Titel, Leerzeilen und Summenzeilen zusätzlich enthalten.

### Synthetische Aufnahmedaten

Eine Arbeitsmappe enthält ein Blatt Bericht mit Titelzeilen und die benannte Excel-Tabelle **Konten** mit K001/1000 und K002/2000.

### Sichtbar und lesbar

- Im Navigator die Tabelle Konten statt des gesamten Berichtsblatts auswählen.
- Spaltenüberschriften und relevante Optionen

**Ausschnitt:** Importdialog – Excel-Datei importieren mit Im Navigator die Tabelle Konten statt des gesamten Berichtsblatts auswählen., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 012 – Fehlerhafte Werte prüfen · Schritt 4

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Fehlerhafte Werte prüfen](../src/content/articles/pq-fehler.md) (ID: pq-fehler)
- Benötigte Oberfläche: Power Query – Fehlerhafte Werte prüfen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-pq-fehler.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Betrag mit den Textwerten 100 und unbekannt laden; Datentyp auf Zahl ändern.
3. Error-Zelle von K002 anklicken und die Fehlerdetails unterhalb der Vorschau sichtbar lassen.

### Synthetische Aufnahmedaten

| Konto | Betrag als Text |
| --- | --- |
| K001 | 100 |
| K002 | unbekannt |

### Sichtbar und lesbar

- Error-Zelle, Ursache der Typumwandlung und Angewendete Schritte

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 013 – Filterrichtung verstehen · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Filterrichtung verstehen](../src/content/articles/filterrichtung.md) (ID: filterrichtung)
- Benötigte Oberfläche: Power BI – Filterrichtung verstehen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-filterrichtung.webp`

### Vorbereitung und genaue Klickfolge

1. Öffne die **Modellansicht** und doppelklicke auf die Beziehungslinie zwischen DimKunde und FaktKonten.
2. Prüfe **Kreuzfilterrichtung: Einfach**. Bei 1:* läuft der Filter von der 1-Seite zur *-Seite.
3. Teste im Bericht einen Datenschnitt aus DimKunde und eine Kontenliste aus FaktKonten.

### Synthetische Aufnahmedaten

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Sichtbar und lesbar

- Tabellennamen und Schlüssel
- 1/* und Filterpfeil beziehungsweise Prüfdialog

**Ausschnitt:** Power BI – Filterrichtung verstehen mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Die relevante Modellstruktur und Einstellung lesbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 014 – Gruppieren: Werte je Schlüssel zusammenfassen · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Gruppieren: Werte je Schlüssel zusammenfassen](../src/content/articles/gruppieren.md) (ID: gruppieren)
- Benötigte Oberfläche: Power Query – Gruppieren: Werte je Schlüssel zusammenfassen
- Bestehenden Screenshot ersetzen: **Ja** – `images/power-bi/pbi-gruppieren.webp`
- Gewünschter Dateiname: `pbi-gruppieren.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Start → Gruppieren nach öffnen.
3. Kunde wählen; neuer Spaltenname Gesamtbestand; Vorgang Summe; Spalte Bestand. Vor OK aufnehmen.

### Synthetische Aufnahmedaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Sichtbar und lesbar

- Kunde, Gesamtbestand, Summe, Bestand im Dialog

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Der vorhandene Dialog zeigt Zeilen zählen. Das neue Hauptbeispiel benötigt Summe von Bestand nach Kunde.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 015 – Kardinalität prüfen: 1:1, 1:n oder n:m · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Kardinalität prüfen: 1:1, 1:n oder n:m](../src/content/articles/kardinalitaet.md) (ID: kardinalitaet)
- Benötigte Oberfläche: Power BI – Kardinalität prüfen: 1:1, 1:n oder n:m
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-kardinalitaet.webp`

### Vorbereitung und genaue Klickfolge

1. Öffne die betroffenen Abfragen im **Power Query-Editor**.
2. Prüfe jeden Beziehungsschlüssel auf NULL, leere Texte und normalisierte Schreibweise.
3. Erzeuge für die Prüfung einen Verweis auf jede Abfrage und wähle **Start → Gruppieren nach** mit dem Schlüssel und **Anzahl Zeilen**.

### Synthetische Aufnahmedaten

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Sichtbar und lesbar

- Tabellennamen und Schlüssel
- 1/* und Filterpfeil beziehungsweise Prüfdialog

**Ausschnitt:** Power BI – Kardinalität prüfen: 1:1, 1:n oder n:m mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Die relevante Modellstruktur und Einstellung lesbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 016 – Laden einer Hilfsabfrage steuern · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Laden einer Hilfsabfrage steuern](../src/content/articles/pq-laden.md) (ID: pq-laden)
- Benötigte Oberfläche: Power Query – Laden einer Hilfsabfrage steuern
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-pq-laden.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Basis_Konten als Hilfsabfrage und FaktKonten als Verweis auf Basis_Konten anlegen.
3. Rechtsklick auf Basis_Konten; Laden aktivieren deaktivieren und Kontextmenü erneut öffnen.

### Synthetische Aufnahmedaten

| Abfrage | Zweck |
| --- | --- |
| Basis_Konten | Import und Bereinigung |
| FaktKonten | Verwendet Basis_Konten; fertige Daten |

### Sichtbar und lesbar

- Basis_Konten, FaktKonten und fehlendes Häkchen bei Laden aktivieren

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 017 – Measure erstellen · Schritt 2

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Measure erstellen](../src/content/articles/measure.md) (ID: measure)
- Benötigte Oberfläche: Power BI – Neues Measure
- Bestehenden Screenshot ersetzen: **Ja** – `images/power-bi/pbi-measure.webp`
- Gewünschter Dateiname: `pbi-measure-formelleiste.webp`

### Vorbereitung und genaue Klickfolge

1. Tabelle Fakt mit den Beispieldaten laden.
2. Im Datenbereich Fakt auswählen.
3. Modellierung → Neues Measure; Gesamtbestand = SUM ( Fakt[Bestand] ) eingeben.

### Synthetische Aufnahmedaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Sichtbar und lesbar

- Formelleiste mit Name und Formel
- Tabelle Fakt im Datenbereich

**Ausschnitt:** Power BI – Neues Measure mit Formelleiste mit Name und Formel, Tabelle Fakt im Datenbereich. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Formelleiste gut erkennbar, aber alte Tabelle Konten statt Fakt und kleine Schrift. An das neue Measure-Beispiel anpassen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 018 – Mehrere Dateien kombinieren · Schritt 4

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Mehrere Dateien kombinieren](../src/content/articles/dateien-kombinieren.md) (ID: dateien-kombinieren)
- Benötigte Oberfläche: Importdialog – Mehrere Dateien kombinieren
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-dateien-kombinieren.webp`

### Vorbereitung und genaue Klickfolge

1. Prüfe den Ordner: Dateien müssen denselben fachlichen Aufbau, passende Spaltennamen und ein kompatibles Format besitzen. Entferne keine Originaldateien; schließe unpassende Dateien in der Abfrage aus.
2. Wähle **Start → Daten abrufen → Ordner** und den Ordner, der die zu kombinierenden Dateien enthält.
3. Wähle **Daten transformieren**. Filtere die Dateiliste nach Erweiterung, Ordnerpfad und bei Bedarf Namen; schließe temporäre Dateien aus.
4. Klicke auf **Dateien kombinieren** am Kopf der Spalte **Content**. Wähle eine repräsentative Beispieldatei und den darin benötigten Tabellenbereich.

### Synthetische Aufnahmedaten

Januar.csv: Konto/Betrag mit K001/10 und K002/20. Februar.csv: dieselben Spalten mit K001/15.

### Sichtbar und lesbar

- Klicke auf **Dateien kombinieren** am Kopf der Spalte **Content**. Wähle eine repräsentative Beispieldatei und den darin benötigten Tabellenbereich.
- Spaltenüberschriften und zugehörige Ausgangswerte

**Ausschnitt:** Importdialog – Mehrere Dateien kombinieren mit Alle passenden CSV-Dateien mit derselben Transformation lesen und anfügen., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 019 – Modellansicht lesen · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Modellansicht lesen](../src/content/articles/modellansicht.md) (ID: modellansicht)
- Benötigte Oberfläche: Power BI – Modellansicht lesen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-modellansicht.webp`

### Vorbereitung und genaue Klickfolge

1. Öffne in Power BI Desktop links die **Modellansicht**.
2. Suche die beteiligten Tabellenkarten und ihre Schlüsselspalten. Klappe die Karten bei Bedarf auf.
3. Lies die Zeichen an der Beziehung: **1** kennzeichnet eindeutige Schlüssel, ***** die Mehrfachseite.

### Synthetische Aufnahmedaten

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Sichtbar und lesbar

- Tabellennamen und Schlüssel
- 1/* und Filterpfeil beziehungsweise Prüfdialog

**Ausschnitt:** Power BI – Modellansicht lesen mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Die relevante Modellstruktur und Einstellung lesbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 020 – Nullwerte behandeln · Schritt 4

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Nullwerte behandeln](../src/content/articles/nullwerte.md) (ID: nullwerte)
- Benötigte Oberfläche: Power Query – Nullwerte behandeln
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-nullwerte.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Bestand als Zahlenspalte mit einem null, 0 und 500 vorbereiten.
3. Bestand markieren → Transformieren → Werte ersetzen. Suche null, Ersatz 0 einstellen, aber noch nicht bestätigen. Diese Aufnahme zeigt nur die Option bei fachlich zulässigem Ersatz.

### Synthetische Aufnahmedaten

| Konto | Bestand | Kommentar |
| --- | --- | --- |
| K001 | null | unbekannt |
| K002 | 0 | gemessen |
| K003 | 500 | vorhanden |

### Sichtbar und lesbar

- null und 0 als verschiedene Ausgangswerte; Ersetzen-Dialog

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 021 – Pivotieren: von lang nach breit · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Pivotieren: von lang nach breit](../src/content/articles/pivotieren.md) (ID: pivotieren)
- Benötigte Oberfläche: Power Query – Pivotieren: von lang nach breit
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-pivotieren.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Monat markieren → Transformieren → Spalte pivotieren.
3. Wertespalte Betrag; erweiterte Optionen Nicht aggregieren für die eindeutigen Beispieldaten. Dialog offen lassen.

### Synthetische Aufnahmedaten

| Kunde | Monat | Betrag |
| --- | --- | --- |
| P001 | Jan | 10 |
| P001 | Feb | 15 |
| P002 | Jan | 20 |
| P002 | Feb | 25 |

### Sichtbar und lesbar

- Markierte Monatsspalte; Wertespalte Betrag und Aggregationsoption

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Bedienort und Auswahl für Pivotieren: von lang nach breit zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 022 – Spalten entfernen · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Spalten entfernen](../src/content/articles/spalten-entfernen.md) (ID: spalten-entfernen)
- Benötigte Oberfläche: Power Query – Spalten entfernen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-spalten-entfernen.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Notiz im Spaltenkopf markieren.
3. Start → Spalten entfernen: das Auswahlmenü öffnen. Noch keine Option anklicken.

### Synthetische Aufnahmedaten

| Konto | Bestand | Notiz |
| --- | --- | --- |
| K001 | 1000 | alt |
| K002 | 2000 | alt |

### Sichtbar und lesbar

- Markierte Notiz-Spalte und Optionen Spalten entfernen / Andere Spalten entfernen

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Bedienort und Auswahl für Spalten entfernen zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 023 – Spalten teilen · Schritt 4

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Spalten teilen](../src/content/articles/spalten-teilen.md) (ID: spalten-teilen)
- Benötigte Oberfläche: Power Query – Spalten teilen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-spalten-teilen.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Kennung markieren → Transformieren → Spalte teilen → Nach Trennzeichen.
3. Benutzerdefiniert: -; ganz links stehendes Trennzeichen; Ausgabe in Spalten. Dialog vor OK aufnehmen.

### Synthetische Aufnahmedaten

| Kennung |
| --- |
| P001-K001 |
| P002-K003 |

### Sichtbar und lesbar

- Trennzeichen -, Trennposition, Spaltenausgabe

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Bedienort und Auswahl für Spalten teilen zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 024 – Star Schema aufbauen · Schritt 4

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Star Schema aufbauen](../src/content/articles/star-schema.md) (ID: star-schema)
- Benötigte Oberfläche: Power BI – Sternschema
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-star-schema.webp`

### Vorbereitung und genaue Klickfolge

1. DimKunde mit P001/A und P002/B laden.
2. DimDatum mit jedem Datum vom 01.01. bis 31.12.2026 laden.
3. FaktBestand: P001/K001/31.01.2026/1000; P001/K002/31.01.2026/2000; P002/K003/31.01.2026/500 laden.
4. Modellansicht: DimKunde[Kunde] → FaktBestand[Kunde] und DimDatum[Datum] → FaktBestand[Datum] als aktive 1:*-Beziehungen mit einfacher Richtung anlegen.

### Synthetische Aufnahmedaten

DimKunde: Kunde/Segment = P001/A, P002/B. DimDatum: lückenloser Kalender 2026. FaktBestand: Kunde/Konto/Datum/Bestand wie oben.

### Sichtbar und lesbar

- Alle drei Tabellen
- Beziehungslinien
- Schlüssel und 1/*
- Filterpfeile

**Ausschnitt:** Power BI – Sternschema mit Alle drei Tabellen, Beziehungslinien, Schlüssel und 1/*, Filterpfeile. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Dimensionen und zentrale Fakten in einer lesbaren Modellansicht zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 025 – Tabellen anhängen · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Tabellen anhängen](../src/content/articles/anhaengen.md) (ID: anhaengen)
- Benötigte Oberfläche: Power Query – Tabellen anhängen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-anhaengen.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Januar und Februar als getrennte Abfragen laden.
3. Start → Abfragen anfügen → Abfragen als neue Abfrage anfügen. Zwei Tabellen wählen, Januar und Februar einstellen. Vor OK aufnehmen.

### Synthetische Aufnahmedaten

**Januar**

| Konto | Monat | Betrag |
| --- | --- | --- |
| K001 | Jan | 10 |
| K002 | Jan | 20 |
| K003 | Jan | 30 |

**Februar**

| Konto | Monat | Betrag |
| --- | --- | --- |
| K001 | Feb | 15 |
| K002 | Feb | 25 |

### Sichtbar und lesbar

- Beide Abfragen und Auswahl Zwei Tabellen

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 026 – Tabellen zusammenführen · Schritt 5

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Tabellen zusammenführen](../src/content/articles/zusammenfuehren.md) (ID: zusammenfuehren)
- Benötigte Oberfläche: Power Query-Editor – Tabellen zusammenführen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-zusammenfuehren.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop → Start → Daten eingeben: Konten und Kunden getrennt mit den unten genannten Daten anlegen.
2. Start → Daten transformieren → Konten auswählen.
3. Start → Abfragen zusammenführen → Abfragen als neue Abfrage zusammenführen.
4. Oben Konten, unten Kunden wählen; jeweils Kunde markieren. Join-Art Linker äußerer Join wählen. Vor OK aufnehmen.

### Synthetische Aufnahmedaten

**Konten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

**Kunden**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

### Sichtbar und lesbar

- Konten oben und Kunden unten
- Kunde in beiden Tabellen markiert
- Linker äußerer Join sichtbar

**Ausschnitt:** Power Query-Editor – Tabellen zusammenführen mit Konten mit Kunden über Kunde verbinden; Segment erweitern., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 027 – Tabellen zusammenführen · Schritt 6

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Tabellen zusammenführen](../src/content/articles/zusammenfuehren.md) (ID: zusammenfuehren)
- Benötigte Oberfläche: Power Query – Tabellenspalte erweitern
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-merge-erweitern.webp`

### Vorbereitung und genaue Klickfolge

1. Konten und Kunden wie im Beispiel laden.
2. Merge nach Kunde als linken äußeren Join durchführen.
3. Am Kopf der neuen Tabellenspalte das Erweitern-Symbol öffnen und Segment auswählen.

### Synthetische Aufnahmedaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |
Kunden: P001/A, P002/B

### Sichtbar und lesbar

- Neue Tabellenspalte
- Erweitern-Dialog
- Nur Segment ausgewählt

**Ausschnitt:** Power Query – Tabellenspalte erweitern mit Neue Tabellenspalte, Erweitern-Dialog, Nur Segment ausgewählt. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Den zweiten notwendigen Schritt nach dem Merge zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 028 – Text in Power Query bereinigen · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Text in Power Query bereinigen](../src/content/articles/pq-text.md) (ID: pq-text)
- Benötigte Oberfläche: Power Query-Editor – Text in Power Query bereinigen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-pq-text.webp`

### Vorbereitung und genaue Klickfolge

1. Markiere die Textspalte und prüfe, ob Leerzeichen fachlich bedeutungslos sind.
2. Wähle **Transformieren → Format → Kürzen** für führende und nachgestellte Leerzeichen.
3. Wähle **Transformieren → Format → Bereinigen** für nicht druckbare Steuerzeichen. Das Zeichen ↵ steht im Beispiel für einen Zeilenumbruch, nicht für ein zu löschendes Pfeilsymbol.

### Synthetische Aufnahmedaten

| Schlüssel roh |
| --- |
|  p001  |
| P002↵ |

### Sichtbar und lesbar

- Kürzen, Bereinigen und Großschreibung auf Kennungen anwenden.
- Spaltenüberschriften und relevante Optionen

**Ausschnitt:** Power Query-Editor – Text in Power Query bereinigen mit Kürzen, Bereinigen und Großschreibung auf Kennungen anwenden., Spaltenüberschriften und relevante Optionen. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Auswahl und Ergebnis der beschriebenen Operation nachvollziehbar zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 029 – Werte ersetzen · Schritt 4

- Priorität: **Hoch**
- Werkzeug: **Power BI Desktop**
- Artikel: [Werte ersetzen](../src/content/articles/werte-ersetzen.md) (ID: werte-ersetzen)
- Benötigte Oberfläche: Power Query – Werte ersetzen
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-werte-ersetzen.webp`

### Vorbereitung und genaue Klickfolge

1. Power BI Desktop öffnen. Die unten aufgeführten Tabellen über Start → Daten eingeben mit exakt diesen Spaltennamen und Werten anlegen; danach Start → Daten transformieren öffnen.
2. Status markieren → Transformieren → Werte ersetzen.
3. Alt suchen; Aktiv einsetzen; unter erweiterten Optionen gesamten Zellinhalt abgleichen. Dialog offen lassen.

### Synthetische Aufnahmedaten

| Status |
| --- |
| Alt |
| Altbestand |
| Neu |

### Sichtbar und lesbar

- Suchwert Alt, Ersatz Aktiv und vollständiger Zellvergleich

**Ausschnitt:** Geöffneten Dialog beziehungsweise Menü mit den genannten Einstellungen und den relevanten Spaltenüberschriften aufnehmen. Text bei 100 % lesbar halten; keine unnötige Leerfläche.

**Zweck / Ersatzgrund:** Bedienort und Auswahl für Werte ersetzen zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 030 – EINDEUTIG: Liste ohne Wiederholungen · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Excel**
- Artikel: [EINDEUTIG: Liste ohne Wiederholungen](../src/content/articles/eindeutig.md) (ID: eindeutig)
- Benötigte Oberfläche: Excel – EINDEUTIG: Liste ohne Wiederholungen
- Bestehenden Screenshot ersetzen: **Ja** – `images/excel/excel-eindeutig.webp`
- Gewünschter Dateiname: `excel-eindeutig.webp`

### Vorbereitung und genaue Klickfolge

1. Beispieltabelle in A1:D4 eintragen.
2. Keine weitere Eingabezelle
3. Zelle H2 auswählen und =EINDEUTIG(A2:A4) eingeben.

### Synthetische Aufnahmedaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |
Keine weitere Eingabezelle

### Sichtbar und lesbar

- Quelltabelle A1:D4
- Kriterienzellen F2/G2 soweit genutzt
- Formelleiste und Ausgabe ab H2

**Ausschnitt:** Excel – EINDEUTIG: Liste ohne Wiederholungen mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Vier alte Personen statt zwei Kunden im neuen Beispiel; Zellbezüge anpassen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 031 – FILTER: passende Zeilen ausgeben · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Excel**
- Artikel: [FILTER: passende Zeilen ausgeben](../src/content/articles/excel-filtern.md) (ID: excel-filtern)
- Benötigte Oberfläche: Excel – FILTER: passende Zeilen ausgeben
- Bestehenden Screenshot ersetzen: **Ja** – `images/excel/excel-filter.webp`
- Gewünschter Dateiname: `excel-excel-filtern.webp`

### Vorbereitung und genaue Klickfolge

1. Beispieltabelle in A1:D4 eintragen.
2. F2 = A
3. Zelle H2 auswählen und =FILTER(A2:D4;C2:C4=F2;"Keine Treffer") eingeben.

### Synthetische Aufnahmedaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |
F2 = A

### Sichtbar und lesbar

- Quelltabelle A1:D4
- Kriterienzellen F2/G2 soweit genutzt
- Formelleiste und Ausgabe ab H2

**Ausschnitt:** Excel – FILTER: passende Zeilen ausgeben mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Filterbedingung und Zellbereiche weichen vom überarbeiteten Beispiel ab.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 032 – INDEX / VERGLEICH · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Excel**
- Artikel: [INDEX / VERGLEICH](../src/content/articles/index-vergleich.md) (ID: index-vergleich)
- Benötigte Oberfläche: Excel – INDEX / VERGLEICH
- Bestehenden Screenshot ersetzen: **Ja** – `images/excel/excel-index-vergleich.webp`
- Gewünschter Dateiname: `excel-index-vergleich.webp`

### Vorbereitung und genaue Klickfolge

1. Beispieltabelle in A1:D4 eintragen.
2. F2 = K002
3. Zelle H2 auswählen und =INDEX(D2:D4;VERGLEICH(F2;B2:B4;0)) eingeben.

### Synthetische Aufnahmedaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |
F2 = K002

### Sichtbar und lesbar

- Quelltabelle A1:D4
- Kriterienzellen F2/G2 soweit genutzt
- Formelleiste und Ausgabe ab H2

**Ausschnitt:** Excel – INDEX / VERGLEICH mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Suchwert hart codiert und Quellbereiche auf anderem Blatt; neues Beispiel nutzt F2 und sichtbare Bereiche.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 033 – Power Query · Schritt 1

- Priorität: **Hoch**
- Werkzeug: **Excel**
- Artikel: [Power Query](../src/content/articles/power-query.md) (ID: power-query)
- Benötigte Oberfläche: Excel – Power Query öffnen
- Bestehenden Screenshot ersetzen: **Ja** – `images/power-bi/pbi-power-query.webp`
- Gewünschter Dateiname: `excel-power-query.webp`

### Vorbereitung und genaue Klickfolge

1. Beispieltabelle mit den sechs Kontenzeilen in Excel eintragen.
2. Eine Zelle wählen → Einfügen → Tabelle; Tabelle hat Überschriften aktivieren.
3. Daten → Aus Tabelle/Bereich wählen.

### Synthetische Aufnahmedaten

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

### Sichtbar und lesbar

- Excel-Register Daten
- Aus Tabelle/Bereich
- Markierte Excel-Tabelle

**Ausschnitt:** Excel – Power Query öffnen mit Excel-Register Daten, Aus Tabelle/Bereich, Markierte Excel-Tabelle. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Sehr breiter Ausschnitt mit kleiner Schrift; Angewendete Schritte rechts fehlen. Die Orientierung braucht Abfragen, Vorschau und Schrittbereich gemeinsam.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 034 – SUMMEWENNS · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Excel**
- Artikel: [SUMMEWENNS](../src/content/articles/summewenns.md) (ID: summewenns)
- Benötigte Oberfläche: Excel – SUMMEWENNS
- Bestehenden Screenshot ersetzen: **Ja** – `images/excel/excel-summewenns.webp`
- Gewünschter Dateiname: `excel-summewenns.webp`

### Vorbereitung und genaue Klickfolge

1. Beispieltabelle in A1:D4 eintragen.
2. F2 = P001; G2 = A
3. Zelle H2 auswählen und =SUMMEWENNS(D2:D4;A2:A4;F2;C2:C4;G2) eingeben.

### Synthetische Aufnahmedaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |
F2 = P001; G2 = A

### Sichtbar und lesbar

- Quelltabelle A1:D4
- Kriterienzellen F2/G2 soweit genutzt
- Formelleiste und Ausgabe ab H2

**Ausschnitt:** Excel – SUMMEWENNS mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Zeigt nur ein Kriterium statt Kunde und Segment; Formel und Beispieldaten anpassen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 035 – XVERWEIS · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Excel**
- Artikel: [XVERWEIS](../src/content/articles/xverweis.md) (ID: xverweis)
- Benötigte Oberfläche: Excel – XVERWEIS
- Bestehenden Screenshot ersetzen: **Ja** – `images/excel/excel-xverweis.webp`
- Gewünschter Dateiname: `excel-xverweis.webp`

### Vorbereitung und genaue Klickfolge

1. Beispieltabelle in A1:D4 eintragen.
2. F2 = K002
3. Zelle H2 auswählen und =XVERWEIS(F2;B2:B4;D2:D4;"Fehlt";0) eingeben.

### Synthetische Aufnahmedaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |
F2 = K002

### Sichtbar und lesbar

- Quelltabelle A1:D4
- Kriterienzellen F2/G2 soweit genutzt
- Formelleiste und Ausgabe ab H2

**Ausschnitt:** Excel – XVERWEIS mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Suchwert ist hart codiert; neuer Ablauf benötigt Kriterienzelle F2 und konsistente Quellbereiche im selben Blatt.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 036 – ZÄHLENWENNS · Schritt 3

- Priorität: **Hoch**
- Werkzeug: **Excel**
- Artikel: [ZÄHLENWENNS](../src/content/articles/zaehlenwenns.md) (ID: zaehlenwenns)
- Benötigte Oberfläche: Excel – ZÄHLENWENNS
- Bestehenden Screenshot ersetzen: **Ja** – `images/excel/excel-zaehlenwenns.webp`
- Gewünschter Dateiname: `excel-zaehlenwenns.webp`

### Vorbereitung und genaue Klickfolge

1. Beispieltabelle in A1:D4 eintragen.
2. F2 = P001; G2 = A
3. Zelle H2 auswählen und =ZÄHLENWENNS(A2:A4;F2;C2:C4;G2) eingeben.

### Synthetische Aufnahmedaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |
F2 = P001; G2 = A

### Sichtbar und lesbar

- Quelltabelle A1:D4
- Kriterienzellen F2/G2 soweit genutzt
- Formelleiste und Ausgabe ab H2

**Ausschnitt:** Excel – ZÄHLENWENNS mit Quelltabelle A1:D4, Kriterienzellen F2/G2 soweit genutzt, Formelleiste und Ausgabe ab H2. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Zeigt nur ein Kriterium statt zwei gleichzeitiger Kriterien.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 037 – Balkendiagramm: Kategorien vergleichen · Schritt 3

- Priorität: **Mittel**
- Werkzeug: **Power BI Desktop**
- Artikel: [Balkendiagramm: Kategorien vergleichen](../src/content/articles/balkendiagramm.md) (ID: balkendiagramm)
- Benötigte Oberfläche: Power BI – Balkendiagramm: Kategorien vergleichen
- Bestehenden Screenshot ersetzen: **Ja** – `images/power-bi/pbi-balken.webp`
- Gewünschter Dateiname: `pbi-balken.webp`

### Vorbereitung und genaue Klickfolge

1. Freie Berichtsfläche → Visualisierungen → Gruppiertes Balkendiagramm. Ziehe Segment auf die Y-Achse und die Betragssumme auf die X-Achse.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Zwei horizontale Balken mit Längen 120 und 80.**.

### Synthetische Aufnahmedaten

| Ausgangswerte |
| --- |
| Segment A: 120; B: 80 |

### Sichtbar und lesbar

- Balkendiagramm: Kategorien vergleichen
- Gewähltes Feld oder vollständige Formel
- Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck / Ersatzgrund:** Sehr kleine Aufnahme, Achsen und Werte kaum lesbar; Feldzuweisung fehlt.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten.

## 038 – Fakt- und Dimensionstabelle · Schritt 2

- Priorität: **Mittel**
- Werkzeug: **Power BI Desktop**
- Artikel: [Fakt- und Dimensionstabelle](../src/content/articles/fakt-dimension.md) (ID: fakt-dimension)
- Benötigte Oberfläche: Power BI – Fakt- und Dimensionstabelle
- Bestehenden Screenshot ersetzen: **Ja** – `images/power-bi/pbi-dimension.webp`
- Gewünschter Dateiname: `pbi-dimension.webp`

### Vorbereitung und genaue Klickfolge

1. Notiere die fachliche Zeilenebene jeder Quelle. Bei einem Bestand ist etwa Konto und Stichtag erforderlich.
2. Ordne beschreibende Merkmale wie Kundensegment einer **Dimension** zu. Ihr Schlüssel identifiziert jeweils genau eine Dimensionszeile.

### Synthetische Aufnahmedaten

**DimKunde**

| Kunde | Segment |
| --- | --- |
| P001 | A |
| P002 | B |

**FaktKonten**

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Sichtbar und lesbar

- Fakt- und Dimensionstabelle
- Gewähltes Feld oder vollständige Formel
- Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck / Ersatzgrund:** Zeigt nur DISTINCT in der Tabellenansicht statt Dimension mit Merkmalen und Beziehung zur Faktentabelle.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten.

## 039 – Karte: eine Kennzahl anzeigen · Schritt 3

- Priorität: **Mittel**
- Werkzeug: **Power BI Desktop**
- Artikel: [Karte: eine Kennzahl anzeigen](../src/content/articles/karte.md) (ID: karte)
- Benötigte Oberfläche: Power BI – Karte: eine Kennzahl anzeigen
- Bestehenden Screenshot ersetzen: **Ja** – `images/power-bi/pbi-karte.webp`
- Gewünschter Dateiname: `pbi-karte.webp`

### Vorbereitung und genaue Klickfolge

1. Freie Berichtsfläche → Visualisierungen → Karte. Ziehe eine vorhandene Kennzahl in das Wertefeld. Unter Visual formatieren Titel, Anzeigeeinheit und Dezimalstellen setzen.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Karte Gesamtbestand: 3500.**.

### Synthetische Aufnahmedaten

| Ausgangswerte |
| --- |
| K001: 1000; K002: 2000; K003: 500 |

### Sichtbar und lesbar

- Karte: eine Kennzahl anzeigen
- Gewähltes Feld oder vollständige Formel
- Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck / Ersatzgrund:** Sehr kleine Aufnahme ohne Feldzuweisung; abweichender Beispielwert 9 Tsd.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten.

## 040 – Matrix: nach Dimensionen auswerten · Schritt 4

- Priorität: **Mittel**
- Werkzeug: **Power BI Desktop**
- Artikel: [Matrix: nach Dimensionen auswerten](../src/content/articles/matrix.md) (ID: matrix)
- Benötigte Oberfläche: Power BI – Matrix: nach Dimensionen auswerten
- Bestehenden Screenshot ersetzen: **Ja** – `images/power-bi/pbi-matrix.webp`
- Gewünschter Dateiname: `pbi-matrix.webp`

### Vorbereitung und genaue Klickfolge

1. Prüfe die vorhandenen Quellfelder und Datentypen. Verwende bei Bedarf ein bereits angelegtes Gesamtbestand-Measure; die Erstellung erklärt der verlinkte Measure-Artikel.
2. Wähle eine freie Berichtsfläche und das Matrixvisual.
3. Ziehe Personennummer nach Zeilen, Produktgruppe nach Spalten und Gesamtbestand nach Werte.
4. Prüfe P001: Einlagen 1.250, Anlagen 750, Gesamt 2.000.

### Synthetische Aufnahmedaten

| Kontonummer | Personennummer | Produktgruppe | Bestand_EUR |
| --- | --- | --- | --- |
| K001 | P001 | Einlagen | 1250 |
| K002 | P001 | Anlagen | 750 |
| K003 | P002 | Einlagen | 2000 |
| K004 | P003 | Kredite | 3200 |
| K005 | P003 | Einlagen | 800 |
| K006 | P004 | Kredite | 1000 |

### Sichtbar und lesbar

- Matrix: nach Dimensionen auswerten
- Gewähltes Feld oder vollständige Formel
- Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck / Ersatzgrund:** Sehr kleine Aufnahme ohne Produktgruppe als Spaltendimension; damit fehlt das zentrale Matrixprinzip.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten.

## 041 – Measure erstellen · Schritt 7

- Priorität: **Mittel**
- Werkzeug: **Power BI Desktop**
- Artikel: [Measure erstellen](../src/content/articles/measure.md) (ID: measure)
- Benötigte Oberfläche: Power BI – Measures organisieren
- Bestehenden Screenshot ersetzen: **Nein**
- Gewünschter Dateiname: `pbi-measure-tabelle.webp`

### Vorbereitung und genaue Klickfolge

1. Start → Daten eingeben; Kennzahlen mit einer Hilfsspalte und einer Zeile anlegen.
2. Measure Gesamtbestand auswählen.
3. Measuretools → Basistabelle → Kennzahlen wählen.
4. Hilfsspalte im Modell ausblenden.

### Synthetische Aufnahmedaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Sichtbar und lesbar

- Kennzahlen-Tabelle
- Measure-Symbol
- Basistabelle-Einstellung

**Ausschnitt:** Power BI – Measures organisieren mit Kennzahlen-Tabelle, Measure-Symbol, Basistabelle-Einstellung. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.

**Zweck / Ersatzgrund:** Optionale Organisation ohne technische Pflicht zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername oder Profil; Andere Programme und Benachrichtigungen; Reale Unternehmens-, Kunden- oder Mitarbeiterdaten.

## 042 – Tabelle: Details prüfen · Schritt 3

- Priorität: **Mittel**
- Werkzeug: **Power BI Desktop**
- Artikel: [Tabelle: Details prüfen](../src/content/articles/tabelle.md) (ID: tabelle)
- Benötigte Oberfläche: Power BI – Tabelle: Details prüfen
- Bestehenden Screenshot ersetzen: **Ja** – `images/power-bi/pbi-tabelle.webp`
- Gewünschter Dateiname: `pbi-tabelle.webp`

### Vorbereitung und genaue Klickfolge

1. Freie Berichtsfläche → Tabelle. Ziehe Konto und Bestand in die Spalten. Prüfe im Feldmenü von Bestand die gewünschte Zusammenfassung und ergänze bei mehreren Stichtagen das Datum.
2. Prüfe die Felder und ihre Aggregation. Verwende für Dimensionen eindeutige Gruppierungsmerkmale und für Kennzahlen die fachlich passende Berechnung.
3. Kontrolliere am Beispiel die Darstellung: **Drei Kontenzeilen und Gesamtsumme 3500.**.

### Synthetische Aufnahmedaten

| Ausgangswerte |
| --- |
| K001: 1000; K002: 2000; K003: 500 |

### Sichtbar und lesbar

- Tabelle: Details prüfen
- Gewähltes Feld oder vollständige Formel
- Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck / Ersatzgrund:** Sehr kleine Aufnahme mit Personenaggregation statt der beschriebenen Kontendetails.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten.

## 043 – Duplikate finden · Schritt 2

- Priorität: **Mittel**
- Werkzeug: **Excel**
- Artikel: [Duplikate finden](../src/content/articles/excel-dubletten-finden.md) (ID: excel-dubletten-finden)
- Benötigte Oberfläche: Excel – Duplikate finden
- Bestehenden Screenshot ersetzen: **Ja** – `images/excel/excel-dubletten.webp`
- Gewünschter Dateiname: `excel-dubletten.webp`

### Vorbereitung und genaue Klickfolge

1. Markiere die zu prüfende Schlüsselspalte ohne Überschrift, im Beispiel **A2:A4**.
2. Wähle **Start → Bedingte Formatierung → Regeln zum Hervorheben von Zellen → Doppelte Werte**.

### Synthetische Aufnahmedaten

| Kunde | Konto | Bestand |
| --- | --- | --- |
| P001 | K001 | 1000 |
| P001 | K002 | 2000 |
| P002 | K003 | 500 |

### Sichtbar und lesbar

- Duplikate finden
- Gewähltes Feld oder vollständige Formel
- Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck / Ersatzgrund:** Markierungen sind erkennbar, aber die neue Anleitung nutzt Kunde in A2:A4. Menü und markierter Prüfbereich sollten gemeinsam sichtbar sein.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten.

## 044 – SORTIEREN: dynamische Liste ordnen · Schritt 5

- Priorität: **Mittel**
- Werkzeug: **Excel**
- Artikel: [SORTIEREN: dynamische Liste ordnen](../src/content/articles/sortieren.md) (ID: sortieren)
- Benötigte Oberfläche: Excel – SORTIEREN: dynamische Liste ordnen
- Bestehenden Screenshot ersetzen: **Ja** – `images/excel/excel-sortieren.webp`
- Gewünschter Dateiname: `excel-sortieren.webp`

### Vorbereitung und genaue Klickfolge

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **Keine weitere Eingabezelle**. Passe diese Bezüge für deine Liste an.
3. Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Der benötigte Überlaufbereich ab H2 muss frei sein und außerhalb einer Excel-Tabelle liegen.
4. Bestätige mit Enter. Vergleiche die Ausgabe mit den tatsächlich passenden Ausgangszeilen.
5. Prüfe einen zweiten Fall und fehlende Werte. Bei wachsenden Listen verwende Excel-Tabellen mit strukturierten Bezügen oder erweitere alle zusammengehörenden Bereiche.

### Synthetische Aufnahmedaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |

Keine weitere Eingabezelle

### Sichtbar und lesbar

- SORTIEREN: dynamische Liste ordnen
- Gewähltes Feld oder vollständige Formel
- Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck / Ersatzgrund:** Ältere Quellwerte und Zellbezüge; Quelle, Formel und Ausgabe müssen das neue Beispiel zeigen.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten.

## 045 – TEILERGEBNIS: gefilterte Zeilen auswerten · Schritt 5

- Priorität: **Mittel**
- Werkzeug: **Excel**
- Artikel: [TEILERGEBNIS: gefilterte Zeilen auswerten](../src/content/articles/teilergebnis.md) (ID: teilergebnis)
- Benötigte Oberfläche: Excel – TEILERGEBNIS: gefilterte Zeilen auswerten
- Bestehenden Screenshot ersetzen: **Ja** – `images/excel/excel-teilergebnis.webp`
- Gewünschter Dateiname: `excel-teilergebnis.webp`

### Vorbereitung und genaue Klickfolge

1. Prüfe die benötigten Quellspalten. Im Beispiel stehen Kunde, Konto, Segment und Bestand in **A1:D4**; die Daten beginnen in Zeile 2.
2. Lege die Kriterien in eigenen Zellen außerhalb der Quelle ab: **Filter in Spalte C nur A**. Passe diese Bezüge für deine Liste an.
3. Aktiviere **Daten → Filter**. Öffne den Filterpfeil von Segment und wähle nur **A**.
4. Klicke in eine freie Ergebniszelle, im Beispiel **H2**, und gib die Formel aus dem Beispiel ein. Achte auf gleich große und gleich ausgerichtete Bereiche.
5. Bestätige mit Enter. Vergleiche die Ausgabe mit den tatsächlich passenden Ausgangszeilen.

### Synthetische Aufnahmedaten

| Zeile | A: Kunde | B: Konto | C: Segment | D: Bestand |
| --- | --- | --- | --- | --- |
| 1 | Kunde | Konto | Segment | Bestand |
| 2 | P001 | K001 | A | 1000 |
| 3 | P001 | K002 | B | 2000 |
| 4 | P002 | K003 | A | 500 |

Filter in Spalte C nur A

### Sichtbar und lesbar

- TEILERGEBNIS: gefilterte Zeilen auswerten
- Gewähltes Feld oder vollständige Formel
- Ergebnis passend zu den Beispieldaten

**Ausschnitt:** Relevantes Menü beziehungsweise Feldzuweisung und Ergebnis gemeinsam, mit lesbaren Namen. Große freie Flächen ausschließen.

**Zweck / Ersatzgrund:** Zeigt nur die ungefilterte Summe; der didaktisch wichtige gefilterte Zustand fehlt.

**Nicht zeigen:** Lokale Dateipfade; Benutzername; Andere Programme und Benachrichtigungen; Reale Unternehmensdaten.

## Prüfung vorhandener Aufnahmen

| Datei | Entscheidung | Begründung |
| --- | --- | --- |
| images/power-bi/pbi-balken.webp | ersetzen | Sehr kleine Aufnahme, Achsen und Werte kaum lesbar; Feldzuweisung fehlt. |
| images/power-bi/pbi-beziehungen.webp | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/power-bi/dax-pruefergebnisse.jpg | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/power-bi/pbi-csv-import.webp | ersetzen | Zu viel Leerfläche und kleine Schrift; automatische Typerkennung ist aktiv. Neue Aufnahme muss Kennungen mit führenden Nullen und deaktivierte Typerkennung zeigen. |
| images/power-bi/pbi-datentyp.webp | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/power-bi/pbi-titel.webp | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/excel/excel-eindeutig.webp | ersetzen | Vier alte Personen statt zwei Kunden im neuen Beispiel; Zellbezüge anpassen. |
| images/excel/excel-dubletten.webp | ersetzen | Markierungen sind erkennbar, aber die neue Anleitung nutzt Kunde in A2:A4. Menü und markierter Prüfbereich sollten gemeinsam sichtbar sein. |
| images/excel/excel-filter.webp | ersetzen | Filterbedingung und Zellbereiche weichen vom überarbeiteten Beispiel ab. |
| images/excel/excel-tabelle-erstellen.jpg | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/power-bi/pbi-dimension.webp | ersetzen | Zeigt nur DISTINCT in der Tabellenansicht statt Dimension mit Merkmalen und Beziehung zur Faktentabelle. |
| images/power-bi/pbi-filterbereich.webp | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/power-bi/pbi-gruppieren.webp | ersetzen | Der vorhandene Dialog zeigt Zeilen zählen. Das neue Hauptbeispiel benötigt Summe von Bestand nach Kunde. |
| images/excel/excel-index-vergleich.webp | ersetzen | Suchwert hart codiert und Quellbereiche auf anderem Blatt; neues Beispiel nutzt F2 und sichtbare Bereiche. |
| images/power-bi/pbi-karte.webp | ersetzen | Sehr kleine Aufnahme ohne Feldzuweisung; abweichender Beispielwert 9 Tsd. |
| images/power-bi/pbi-matrix.webp | ersetzen | Sehr kleine Aufnahme ohne Produktgruppe als Spaltendimension; damit fehlt das zentrale Matrixprinzip. |
| images/power-bi/pbi-measure.webp | ersetzen | Formelleiste gut erkennbar, aber alte Tabelle Konten statt Fakt und kleine Schrift. An das neue Measure-Beispiel anpassen. |
| images/excel/excel-pivot-felder.webp | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/excel/excel-pivot-aggregation.webp | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/excel/excel-pivot-erstellen.webp | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/power-bi/pbi-power-query.webp | ersetzen | Sehr breiter Ausschnitt mit kleiner Schrift; Angewendete Schritte rechts fehlen. Die Orientierung braucht Abfragen, Vorschau und Schrittbereich gemeinsam. |
| images/power-bi/pbi-abfragen.webp | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/power-bi/pbi-text-bereinigen.webp | behalten | Bedienort beziehungsweise Ergebnis ausreichend lesbar; bleibt mit Einordnung erhalten. |
| images/excel/excel-sortieren.webp | ersetzen | Ältere Quellwerte und Zellbezüge; Quelle, Formel und Ausgabe müssen das neue Beispiel zeigen. |
| images/excel/excel-summewenns.webp | ersetzen | Zeigt nur ein Kriterium statt Kunde und Segment; Formel und Beispieldaten anpassen. |
| images/power-bi/pbi-tabelle.webp | ersetzen | Sehr kleine Aufnahme mit Personenaggregation statt der beschriebenen Kontendetails. |
| images/excel/excel-teilergebnis.webp | ersetzen | Zeigt nur die ungefilterte Summe; der didaktisch wichtige gefilterte Zustand fehlt. |
| images/excel/excel-xverweis.webp | ersetzen | Suchwert ist hart codiert; neuer Ablauf benötigt Kriterienzelle F2 und konsistente Quellbereiche im selben Blatt. |
| images/excel/excel-zaehlenwenns.webp | ersetzen | Zeigt nur ein Kriterium statt zwei gleichzeitiger Kriterien. |

Die bestehenden SVG-Schemata bleiben als Schemata gekennzeichnet. Für IDA sind keine echten Oberflächenaufnahmen vorgesehen. Das bestehende DAX-Prüfergebnisbild ist ein lesbarer technischer Nachweis der älteren Sechs-Zeilen-Beispiele und kein Ersatz für die neue Measure-Anleitung.
