---
{
  "id": "ida-ci-batch",
  "slug": "ida-ci-batch",
  "titel": "aCI-Batch",
  "bereich": "IDA",
  "werkzeuge": [
    "IDA"
  ],
  "kategorie": "aCI-Batch",
  "schwierigkeit": "Grundlage",
  "kurzbeschreibung": "Meine Merkpunkte zu agree21CI-Batch: IDA-Auswahl, eindeutige Schlüssel, zu ändernde Werte, Übergabe und Prüfung vor und nach der Verarbeitung.",
  "ort": "Persönliche IDA-Arbeitsnotizen",
  "tags": [
    "aCI-Batch",
    "IDA-Notizen"
  ],
  "synonyme": [
    "ci batch",
    "aci batch",
    "agree21ci batch",
    "massenänderung",
    "bestandsänderung",
    "ida ci batch",
    "ida aci batch"
  ],
  "verwandteThemen": [
    "ida-reporting",
    "ida-formeln",
    "ida-gvm"
  ],
  "kontexte": [
    "Reporting",
    "Datenqualität"
  ],
  "quelleTyp": "oeffentliche-dokumentation",
  "zuletztGeprueft": "2026-11-03",
  "art": "artikel",
  "ebene": "Kernwissen",
  "praxis": false,
  "screenshots": [],
  "quellen": [
    "https://www.rurberatung.de/",
    "https://www.arbeitsagentur.de/jobsuche/jobdetail/14935-00011588_007-S"
  ],
  "darstellung": "ida-note"
}
---

aCI-Batch ordne ich hier als Werkzeug für Bestandsänderungen auf Grundlage vorbereiteter Daten ein. IDA liefert die Auswahl und Kontrollbasis; die Änderung erfolgt im nachgelagerten Verarbeitungsschritt.

## Wofür ich es brauche

Eine fachlich definierte Änderung soll für eine ausgewählte Menge von Objekten vorbereitet werden. Entscheidend sind die richtige Auswahl, ein eindeutiger Bezug und der beabsichtigte Zielwert.

## Datenbasis vorbereiten

- In IDA die benötigten Personen, Konten oder anderen fachlichen Objekte auswählen.
- Stichtag und Filter festhalten; nur notwendige Angaben übernehmen.
- Eine eindeutige Zeile je beabsichtigtem Änderungsfall herstellen.
- Fehlende Angaben und widersprüchliche Zielwerte vor der Weiterverarbeitung klären.

## Schlüssel / zu ändernde Werte

Der Schlüssel muss genau das gewünschte Objekt treffen. Ausgangswert und Zielwert gegenüberstellen: Steht ein Objekt bereits im Zielzustand, ist es kein zusätzlicher notwendiger Änderungsfall. Zwei Zeilen mit demselben Schlüssel und verschiedenen Zielwerten sind ein Konflikt; nicht beliebig eine Zeile entfernen.

Ein Schlüssel kann aus mehreren Bestandteilen bestehen. Bestandteile, Reihenfolge, Länge und Formatierung prüfen; führende Nullen bei textuellen Kennungen erhalten. Ein frei erfundenes fachliches Beispiel wäre die Kombination aus Kontonummer 4711 und Stichtag 30.09.2026. Es legt weder Feldlängen noch einen technischen Schlüsselaufbau für aCI-Batch fest.

## Änderung, Neuanlage und Löschung

**Änderung:** Ein vorhandenes Objekt erhält einen anderen Wert. **Neuanlage:** Ein bisher nicht vorhandenes Objekt entsteht. **Löschung:** Ein vorhandenes Objekt wird entfernt. Die Vorgangsart muss zur fachlichen Absicht passen. Welche Arten für ein konkretes Objekt unterstützt sind, muss im jeweiligen Verarbeitungskontext geprüft werden; die Begriffe sind keine Zusage, dass aCI-Batch jede Operation erlaubt.

## Datei / Übergabe allgemein

Für die Übergabe gelten die Anforderungen des vorgesehenen Verarbeitungskontexts: benötigte Angaben, Datentypen, Format und eindeutige Schlüssel. Eine Berichtsliste ist nicht automatisch eine verarbeitbare Übergabedatei. Hier wird kein aCI-Batch-Dateischema festgelegt.

Das Zielfeld muss über die für den Objektbereich vorgesehenen Metadaten eindeutig identifiziert werden. Welche Felder änderbar und welche Angaben erforderlich sind, ergibt sich aus der jeweils gültigen Produktdokumentation.

| Angabe | Merken |
|---|---|
| Verarbeitungsart | Änderung, Neuanlage oder Löschung nur verwenden, wenn für Objekt und Feld unterstützt |
| Objektbereich und Zielfeld | zulässige Kombination anhand der Felddefinition bestimmen |
| Feldlänge | maximal bzw. technisch vorgesehene Länge beachten; nicht mit der tatsächlichen Wertlänge verwechseln |
| Nachkommastellen | beeinflussen die Interpretation und Formatierung numerischer Werte |
| Datentyp und Format | müssen exakt zur technischen Felddefinition passen |
| Alter und neuer Wert | bisherigen Wert und beabsichtigten Zielwert unterscheiden |

Je nach Änderungsart kann der bisherige Wert zur Validierung relevant sein oder bewusst ignoriert werden. Für NULL, leeren Inhalt und Ignorieren ausschließlich die dafür dokumentierten technischen Werte verwenden.

Die vorbereitete Datei wird über den vorgesehenen kontrollierten Prozess verarbeitet.

## Prüfung vor Verarbeitung

- Auswahlmenge und tatsächlich notwendige Änderungsmenge unterscheiden.
- Schlüssel vollständig und auf der gewählten Ebene eindeutig?
- Ausgangswerte noch passend zum betrachteten Datenstand?
- Zielwerte fachlich begründet und ohne Widersprüche?
- Erforderliche Angaben vorhanden, Typ und Format kompatibel?
- Zusätzlich dokumentierte Wertebereiche, Plausibilitäten, Abhängigkeiten und Nebenobjekte berücksichtigt? Nur das Zielfeld zu betrachten kann für eine gültige Änderung zu wenig sein.

## Prüfung nach Verarbeitung

Dieselben Objekte erneut betrachten und den tatsächlichen Zielzustand vergleichen. Geänderte, bereits passende und ungeklärte Fälle getrennt zählen. Stichproben ergänzen den Mengenabgleich; ein technischer Erfolgsstatus ersetzt die fachliche Ergebnisprüfung nicht.
