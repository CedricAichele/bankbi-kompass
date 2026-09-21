---
{
  "id": "beziehungen",
  "slug": "beziehungen",
  "titel": "Beziehung erstellen",
  "bereich": "Power BI",
  "werkzeuge": [
    "Power BI"
  ],
  "kategorie": "Datenmodell",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Eine Beziehung verbindet Tabellen im Modell, damit eine Dimension die passenden Fakten filtert.",
  "ort": "Power BI Desktop → Modellansicht → Beziehungen verwalten",
  "tags": [
    "Beziehung erstellen",
    "Reporting"
  ],
  "synonyme": [
    "zwei tabellen",
    "Werte aus anderer Tabelle holen",
    "zwei Tabellen verbinden",
    "zwei tabellen zusammen",
    "wert aus anderer tabelle"
  ],
  "verwandteThemen": [
    "eins-zu-viele",
    "filterrichtung",
    "kardinalitaet",
    "measure",
    "beziehung-oder-merge",
    "beziehung-fehler",
    "datumstabelle",
    "granularitaet"
  ],
  "kontexte": [
    "Reporting"
  ],
  "quelleTyp": "synthetisches-beispiel",
  "zuletztGeprueft": "2026-09-21",
  "art": "artikel",
  "quellen": [
    "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationships-understand"
  ],
  "screenshots": [
    {
      "alt": "Bedienort: Power BI – Beziehung erstellen",
      "caption": "Geplante Aufnahme: Power BI – Beziehung erstellen",
      "schritt": 4,
      "schema": false,
      "status": "todo",
      "todo": "Die relevante Modellstruktur und Einstellung lesbar zeigen.",
      "aufnahmeplan": {
        "prioritaet": "Hoch",
        "werkzeug": "Power BI Desktop",
        "oberflaeche": "Power BI – Beziehung erstellen",
        "klickfolge": [
          "Lade die benötigte Dimension und Faktentabelle. Prüfe die Schlüsselspalten auf denselben Datentyp und dieselbe fachliche Bedeutung.",
          "Prüfe **DimKunde[Kunde]**: Jeder Schlüssel muss genau einmal vorkommen. In FaktKonten darf ein Kunde mehrfach vorkommen.",
          "Öffne links die **Modellansicht**, dann **Modellierung → Beziehungen verwalten → Neu**. Wähle DimKunde und FaktKonten mit jeweils der Spalte Kunde.",
          "Stelle die Kardinalität auf **Eins-zu-Viele (1:*)**, die Kreuzfilterrichtung auf **Einfach** und die Beziehung auf **aktiv**. Prüfe, welche Tabelle tatsächlich auf der 1-Seite steht."
        ],
        "daten": "**DimKunde**\n\n| Kunde | Segment |\n| --- | --- |\n| P001 | A |\n| P002 | B |\n\n**FaktKonten**\n\n| Kunde | Konto | Bestand |\n| --- | --- | --- |\n| P001 | K001 | 1000 |\n| P001 | K002 | 2000 |\n| P002 | K003 | 500 |",
        "sichtbar": [
          "Tabellennamen und Schlüssel",
          "1/* und Filterpfeil beziehungsweise Prüfdialog"
        ],
        "ausschnitt": "Power BI – Beziehung erstellen mit Tabellennamen und Schlüssel, 1/* und Filterpfeil beziehungsweise Prüfdialog. Auf den relevanten Dialog und die lesbaren Tabellenüberschriften begrenzen.",
        "dateiname": "pbi-beziehungen.webp",
        "zweck": "Die relevante Modellstruktur und Einstellung lesbar zeigen.",
        "nichtZeigen": [
          "Lokale Dateipfade",
          "Benutzername oder Profil",
          "Andere Programme und Benachrichtigungen",
          "Reale Unternehmens-, Kunden- oder Mitarbeiterdaten"
        ]
      }
    },
    {
      "src": "images/power-bi/beziehung.svg",
      "alt": "Schema: Eine Produktzeile mit PR-A filtert zwei Bestandszeilen mit PR-A.",
      "hinweis": "1 steht für einen eindeutigen Produktschlüssel; n für mehrere passende Detailzeilen.",
      "caption": "Selbst erstelltes Schema mit synthetischen Kennungen. Keine Programmoberfläche.",
      "schema": true,
      "status": "bereit",
      "schritt": 2
    },
    {
      "src": "images/power-bi/pbi-beziehungen.webp",
      "alt": "Aktive Beziehung: Personen auf der 1-Seite filtern Konten auf der *-Seite.",
      "caption": "Aktive Beziehung: Personen auf der 1-Seite filtern Konten auf der *-Seite.",
      "schritt": 5,
      "schema": false,
      "status": "bereit",
      "hinweis": "Echte Aufnahme mit vollständig synthetischen Demodaten. Bedienoberfläche und Bezeichnungen können je Version abweichen. Die Aufnahme illustriert den Bedienort; Feldnamen und Werte können vom aktuellen Textbeispiel abweichen."
    }
  ],
  "praxis": true
}
---

## Wann brauche ich das?

Eine Kundenauswahl soll die passenden Konten filtern, obwohl beide Tabellen getrennt bleiben.

## Voraussetzungen

Tabellen mit bekanntem fachlichem Aufbau und passenden Schlüsseln. Das folgende Modell ist ein frei erfundenes Beispiel.

## Schritte

1. Lade die benötigte Dimension und Faktentabelle. Prüfe die Schlüsselspalten auf denselben Datentyp und dieselbe fachliche Bedeutung.
2. Prüfe **DimKunde[Kunde]**: Jeder Schlüssel muss genau einmal vorkommen. In FaktKonten darf ein Kunde mehrfach vorkommen.
3. Öffne links die **Modellansicht**, dann **Modellierung → Beziehungen verwalten → Neu**. Wähle DimKunde und FaktKonten mit jeweils der Spalte Kunde.
4. Stelle die Kardinalität auf **Eins-zu-Viele (1:*)**, die Kreuzfilterrichtung auf **Einfach** und die Beziehung auf **aktiv**. Prüfe, welche Tabelle tatsächlich auf der 1-Seite steht.
5. Bestätige. Die Linie verbindet DimKunde auf der 1-Seite mit FaktKonten auf der *-Seite; durchgezogen bedeutet aktiv.
6. Prüfe im Bericht mit einem Tabellenvisual aus **FaktKonten[Konto]** und **Bestand** sowie einem Datenschnitt aus **DimKunde[Kunde]**. Wähle P001.
7. Erwartet werden K001 und K002. Hebe den Filter auf: K003 erscheint wieder. Dafür ist kein neues Measure erforderlich.

## Beispiel

### Vorher · Beispieldaten

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

### Aktion

DimKunde[Kunde] (1) → FaktKonten[Kunde] (*); Filter P001.

### Nachher · Beispielergebnis

| Konto | Bestand |
| --- | --- |
| K001 | 1000 |
| K002 | 2000 |

## Ergebnis

Eine aktive Beziehung überträgt Filter zwischen logisch verbundenen, physisch getrennten Tabellen.

## Warum funktioniert das?

Der ausgewählte Dimensionsschlüssel grenzt die passenden Faktzeilen ein. Die Beziehung kopiert weder Segment in die Kontentabelle noch führt sie die Tabellen wie ein Merge zusammen.

## Typischer Fehler

Zwei nicht eindeutige Spalten verbinden und eine n:m-Beziehung als schnelle Reparatur akzeptieren.

## Plausibilitätscheck

P001 zeigt zwei Konten und 3000; ohne Filter drei Konten und 3500.
