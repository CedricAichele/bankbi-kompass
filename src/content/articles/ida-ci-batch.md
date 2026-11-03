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

## Feldliste / Produktdokumentation prüfen

Bevor ich die Änderungsdaten aufbereite, prüfe ich das gewünschte Feld in der zugehörigen aCI-Batch-Feldliste bzw. Produktdokumentation. Das gehört zum normalen Ablauf und ist Voraussetzung für die Vorbereitung der Übergabedatei.

| Prüfen | Festhalten |
|---|---|
| Änderbarkeit | Kann das gewünschte Feld über aCI-Batch geändert werden? |
| Änderungsart | Welche Operationen sind für dieses Feld und Objekt unterstützt? |
| Sachgebiet / Objektbereich | Welcher fachliche Bereich ist relevant? |
| Objekt / Segment und Feld | Wie werden Zielobjekt und Zielfeld in der Feldliste technisch bezeichnet? |
| Feldlänge | Welche Länge ist vorgesehen? |
| Nachkommastellen | Wie werden numerische Werte interpretiert und formatiert? |
| Format | Welcher Datentyp und welches Format werden erwartet? |
| Wertebereich | Welche Werte sind für das Feld zulässig? |
| Plausibilitäten / Abhängigkeiten | Welche zusätzlichen Bedingungen oder Umsetzungsregeln gelten? |
| Weitere Objekte / Konditionen | Was muss neben dem eigentlichen Zielfeld mit berücksichtigt werden? |

Die konkrete Felddefinition entnehme ich der gültigen Produktdokumentation. Die folgenden Notizen verwenden ausgeschriebene fachliche Bezeichnungen.

## Arbeitsablauf

1. Fachliche Änderungsanforderung klären.
2. Das relevante Feld in der Feldliste / Produktdokumentation prüfen.
3. Zulässige Änderungsart und benötigte Metadaten feststellen.
4. Den relevanten Bestand über IDA bestimmen.
5. Schlüssel sowie alte und neue Werte vorbereiten.
6. Die Übergabedatei entsprechend den bestätigten Felddefinitionen erzeugen.
7. Eingaben, Auswahlmenge und beabsichtigte Änderungen plausibilisieren.
8. Die Datei über den dafür vorgesehenen Prozess verarbeiten.
9. Das Ergebnis anhand der betroffenen Objekte kontrollieren.

## Datenbasis vorbereiten

- In IDA die benötigten Personen, Konten oder anderen fachlichen Objekte auswählen.
- Stichtag und Filter festhalten; nur notwendige Angaben übernehmen.
- Eine eindeutige Zeile je beabsichtigtem Änderungsfall herstellen.
- Fehlende Angaben und widersprüchliche Zielwerte vor der Weiterverarbeitung klären.

## Schlüssel / zu ändernde Werte

Der Schlüssel muss genau das gewünschte Objekt treffen. Ausgangswert und Zielwert gegenüberstellen: Steht ein Objekt bereits im Zielzustand, ist es kein zusätzlicher notwendiger Änderungsfall. Zwei Zeilen mit demselben Schlüssel und verschiedenen Zielwerten sind ein Konflikt; nicht beliebig eine Zeile entfernen.

Ein Schlüssel kann aus mehreren Bestandteilen bestehen. Bestandteile, Reihenfolge, Länge und Formatierung anhand der Felddefinition prüfen; führende Nullen bei textuellen Kennungen erhalten.

## Änderung, Neuanlage und Löschung

**Änderung:** Ein vorhandenes Objekt erhält einen anderen Wert. **Neuanlage:** Ein bisher nicht vorhandenes Objekt entsteht. **Löschung:** Ein vorhandenes Objekt wird entfernt. Die Vorgangsart muss zur fachlichen Absicht passen. Welche Arten für ein konkretes Objekt unterstützt sind, muss im jeweiligen Verarbeitungskontext geprüft werden; die Begriffe sind keine Zusage, dass aCI-Batch jede Operation erlaubt.

## Datei / Übergabe allgemein

Für die Übergabe gelten die Anforderungen des vorgesehenen Verarbeitungskontexts: benötigte Angaben, Datentypen, Format und eindeutige Schlüssel. Eine Berichtsliste ist nicht automatisch eine verarbeitbare Übergabedatei. Hier wird kein aCI-Batch-Dateischema festgelegt.

Die in der Feldliste bestätigten Angaben zu Änderungsart, Sachgebiet / Objektbereich, Objekt / Segment, Feld, Feldlänge, Nachkommastellen und Format für die Datei verwenden. Die technisch vorgesehene Feldlänge ist dabei nicht automatisch die tatsächlich genutzte Wertlänge.

Je nach Änderungsart kann der bisherige Wert zur Validierung relevant sein oder bewusst ignoriert werden. Für NULL, leeren Inhalt und Ignorieren ausschließlich die dafür dokumentierten technischen Werte verwenden.

Die vorbereitete Datei wird über den vorgesehenen kontrollierten Prozess verarbeitet.

## Synthetisches Änderungsbeispiel

**Synthetisches Beispiel – Werte und Schlüssel frei erfunden.**

Für dieses Beispiel wird angenommen, dass die Feldliste eine Änderung am Hinweis eines Adressobjekts erlaubt. Auch die Feldlänge und der Schlüsselaufbau sind frei erfunden. Die Tabelle ist eine fachliche Prüfübersicht und kein aCI-Batch-Dateischema.

| Änderungsart | Objektbereich | Objekt | Feld | Feldlänge | Format | Schlüssel | Alter Wert | Neuer Wert |
|---|---|---|---|---:|---|---|---|---|
| Änderung | Kunde | Adresse | Hinweis | 30 | Text | `000123-0004` | leer | Beispieltext |

- **Änderungsart:** Welche Operation ausgeführt werden soll; hier eine Änderung an einem bestehenden Objekt.
- **Objektbereich / Objekt:** Wo das Zielobjekt fachlich liegt; im Beispiel ein Adressobjekt im Kundenbereich.
- **Feld:** Welches Attribut geändert wird; hier der erfundene Hinweis.
- **Feldlänge / Format:** Aus der Feldliste übernehmen. Im Beispiel gelten eine maximale Länge von 30 Zeichen und Textformat; für numerische Felder zusätzlich die Nachkommastellen prüfen.
- **Schlüssel:** Identifiziert genau das zu ändernde Objekt und kann aus mehreren Bestandteilen bestehen. `000123-0004` zeigt nur eine erfundene Kombination mit führenden Nullen.
- **Alter Wert:** Der bisherige Wert, soweit er für die Verarbeitung relevant ist. „leer“ beschreibt hier den Ausgangszustand und ist kein technischer Sonderwert.
- **Neuer Wert:** Der gewünschte Zielwert; hier der Text „Beispieltext“.

## Prüfung vor Verarbeitung

- Auswahlmenge und tatsächlich notwendige Änderungsmenge unterscheiden.
- Schlüssel vollständig und auf der gewählten Ebene eindeutig?
- Ausgangswerte noch passend zum betrachteten Datenstand?
- Zielwerte fachlich begründet und ohne Widersprüche?
- Erforderliche Angaben vorhanden, Typ und Format kompatibel?
- Zusätzlich dokumentierte Wertebereiche, Plausibilitäten, Abhängigkeiten und Nebenobjekte berücksichtigt? Nur das Zielfeld zu betrachten kann für eine gültige Änderung zu wenig sein.

## Prüfung nach Verarbeitung

Dieselben Objekte erneut betrachten und den tatsächlichen Zielzustand vergleichen. Geänderte, bereits passende und ungeklärte Fälle getrennt zählen. Stichproben ergänzen den Mengenabgleich; ein technischer Erfolgsstatus ersetzt die fachliche Ergebnisprüfung nicht.
