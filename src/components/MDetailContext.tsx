import type { MEntry } from "../content/m-reference";

export function mUseContext(entry:MEntry) {
  if(entry.name === "Record.FieldOrDefault") return "Wenn ein Datensatz ein optionales Feld enthalten kann. Fehlt das Feld, liefert die Funktion einen festgelegten Ersatzwert; ein vorhandener null-Wert wird dadurch nicht ersetzt.";
  if(entry.name === "Table.AddIndexColumn") return "Wenn eine Transformation eine technische Zeilennummer benötigt. Reihenfolge zuerst festlegen; die Nummer ersetzt keinen fachlichen Schlüssel.";
  const contexts:Record<string,string> = {
    Text: "Bei Exportspalten, Kennungen oder Bezeichnungen, deren Schreibweise vor einem Vergleich, Filter oder Merge vereinheitlicht werden muss.",
    Zahlen: "Wenn eine numerische Auswertung einen gerundeten, konvertierten oder abgeleiteten Wert benötigt. Rechengenauigkeit und fachliche Rundungsregel vorher festlegen.",
    Datum: "Wenn du aus einem fachlichen Datum einen Periodenschlüssel, Stichtag oder Datumsbestandteil für die Auswertung ableiten möchtest.",
    "Datum/Uhrzeit": "Wenn ein Zeitstempel in Datum, Uhrzeit oder eine Dauer für die Auswertung zerlegt werden soll. Fachlichen Stichtag und Ausführungszeitpunkt auseinanderhalten.",
    Bedingungen: "Wenn jede Zeile anhand von Grenzwerten oder mehreren Kriterien einer nachvollziehbaren Ergebnisklasse zugeordnet werden soll.",
    "NULL und Fehler": "Wenn fehlende oder ungültige Eingaben erkannt und nach einer ausdrücklich festgelegten Regel behandelt werden sollen.",
    Spalten: "Wenn du den Spaltenaufbau einer wiederkehrenden Datenlieferung mit einem reproduzierbaren Abfrageschritt bearbeiten möchtest.",
    Tabellen: "Wenn du Zeilen aus vorhandenen Abfragen organisieren oder zusammenführen möchtest. Vorher festlegen, was eine Zeile fachlich beschreibt.",
    Filtern: "Wenn nur die Zeilen, die eine festgelegte Bedingung erfüllen, in die weitere Auswertung eingehen sollen.",
    Gruppieren: "Wenn mehrere Einzelzeilen zu einer Kennzahl je fachlichem Schlüssel und Stichtag zusammengefasst werden sollen.",
    Listen: "Wenn mehrere Werte gemeinsam ausgewertet werden, etwa Bestände innerhalb einer Gruppe oder eine Liste zulässiger Kategorien. Eine Liste kann direkt im Code stehen oder aus einer Spalte beziehungsweise Gruppierung stammen.",
    "Merge / Join": "Wenn du zu einer Bestandstabelle Merkmale aus einer zweiten Tabelle über gemeinsame Schlüssel ergänzen möchtest.",
    Datentypen: "Wenn Werte korrekt als Kennung, Zahl oder Datum interpretiert werden müssen, bevor Filter, Berechnungen oder Verknüpfungen folgen.",
  };
  return contexts[entry.category] || entry.use;
}

export function mRelated(entry:MEntry) {
  if(entry.name === "Table.NestedJoin") return "zusammenfuehren";
  if(entry.name === "Table.Combine") return "anhaengen";
  if(entry.name === "Table.Group" || entry.category === "Listen") return "gruppieren";
  if(entry.category === "Text") return "pq-text";
  if(entry.category === "Datum" || entry.category === "Datum/Uhrzeit") return "pq-datum";
  if(entry.category === "NULL und Fehler") return "nullwerte";
  return "pq-benutzerdefiniert";
}

export function mInputType(entry:MEntry) {
  if(entry.name === "Record.FieldOrDefault") return "Das erste Argument ist ein Record, also ein Datensatz mit benannten Feldern. Im Beispiel enthält die Spalte [Datensatz] solche Records. Der gesuchte Feldname ist Text; der Ersatzwert muss zur fachlichen Verwendung passen.";
  if(entry.name.startsWith("Table.")) return "Eingabe ist eine Tabelle beziehungsweise eine vorhandene Abfrage. Schlüsselspalten müssen beim Kombinieren kompatible Typen haben; Bestände sind Zahlen, Stichtage Datumswerte. Typkonvertierungen richten sich nach den im Code angegebenen Spalten und Typen.";
  if(entry.name === "Text.From") return "Der Beispielwert ist eine Zahl und wird zu Text. Das Gebietsschema kann die Darstellung beeinflussen; eine bereits verlorene führende Null entsteht dadurch nicht neu.";
  if(entry.name === "Number.FromText" || entry.name === "try … otherwise") return "[Wert] beziehungsweise die angegebene Quellspalte enthält Text. Dezimal- und Tausendertrennzeichen müssen zum angegebenen Gebietsschema passen.";
  if(entry.name.startsWith("Text.")) return "Die referenzierten Spalten enthalten Text (type text). Zahlenkennungen vor Textoperationen bewusst als Text laden; Text.Combine erwartet eine Liste von Textwerten.";
  if(entry.name.startsWith("List.")) return "Geschweifte Klammern erzeugen eine Liste. Summe und Durchschnitt benötigen numerische Elemente; List.Contains vergleicht mit dem Typ der gesuchten Kategorie.";
  if(entry.name.startsWith("Duration.")) return "Die Differenz kompatibler Datums- beziehungsweise Datum/Uhrzeit-Werte ergibt eine Dauer (duration). Nicht Datum und Text voneinander abziehen.";
  if(entry.name.startsWith("DateTime.")) return "Für Datum/Uhrzeit-Auszüge einen datetime-Wert verwenden. LocalNow benötigt keinen Spaltenwert und wird beim Ausführen der Abfrage ausgewertet.";
  if(entry.name === "Date.From") return "Das Beispiel konvertiert einen Datumswert beziehungsweise Datumstext. Bei Text muss das Quellgebietsschema stimmen; mehrdeutige Datumsangaben vorab klären.";
  if(entry.name.startsWith("Date.")) return "[Datum] enthält einen Datumswert (type date), keinen nur wie ein Datum aussehenden Text. Tages-, Monats- oder Jahresabstände sind Zahlen.";
  if(entry.name.startsWith("Number.")) return "Die Wertspalte enthält Zahlen (type number). Textzahlen zuerst mit passendem Gebietsschema konvertieren; null bleibt fachlich von 0 getrennt.";
  return "Verwende die im Ausgangsbeispiel gezeigten Typen: Zahlen für Grenzwerte, Text für Bezeichnungen, true/false für logische Werte. Fehlende Werte (null) gesondert behandeln.";
}

function ExampleTable({caption,head,rows}:{caption:string;head:string[];rows:string[][]}) {
  return <div className="m-example-scroll" role="region" aria-label={caption} tabIndex={0}><table><caption>{caption}</caption><thead><tr>{head.map(h=><th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{rows.map((row,i)=><tr key={i}>{row.map((v,j)=><td key={j}>{v}</td>)}</tr>)}</tbody></table></div>;
}

export function MDetailContext({name}:{name:string}) {
  if(name === "Table.Group") return <>
    <ExampleTable caption="Vorher: drei Bestandszeilen" head={["Stichtag (date)","Produkt (text)","Bestand (number)"]} rows={[["30.09.2026","A","10"],["30.09.2026","A","20"],["30.09.2026","B","5"]]}/>
    <ExampleTable caption="Nachher: zwei Gruppen" head={["Stichtag","Produkt","Bestand gesamt"]} rows={[["30.09.2026","A","30"],["30.09.2026","B","5"]]}/>
    <p>List.Sum erhält innerhalb jeder Gruppe die Liste ihrer Bestände: für A {"{10, 20}"}, für B {"{5}"}. Kontrolle: 3 Eingabezeilen ergeben 2 Gruppen; die Summe bleibt 35. Der Stichtag bleibt Teil des Schlüssels. null-Bestände vor der Aggregation prüfen: Eine Summe belegter Werte beweist keine vollständige Lieferung.</p>
  </>;
  if(name === "Table.Combine") return <>
    <ExampleTable caption="Vorher: zwei Abfragen" head={["Abfrage","Kundennummer (text)","Bestand (number)"]} rows={[["Januar","K01","10"],["Februar","K02","20"]]}/>
    <ExampleTable caption="Nachher: angehängte Zeilen" head={["Kundennummer","Bestand"]} rows={[["K01","10"],["K02","20"]]}/>
    <p>Januar und Februar sind hier Abfragenamen, keine Dateinamen und keine automatisch angelegte Herkunftsspalte. Kontrolle: 1 + 1 = 2 Zeilen. Unterschiedliche Spaltennamen erzeugen zusätzliche Spalten mit null in den jeweils fehlenden Zeilen. Für echte Monatsbestände den Stichtag in jeder Quelle mitführen; 10 + 20 ist dann kein Bestand zu einem gemeinsamen Stichtag.</p>
  </>;
  if(name === "Table.NestedJoin") return <>
    <ExampleTable caption="Vorher: linke Bestandstabelle" head={["Kundennummer (text)","Bestand (number)"]} rows={[["K01","10"],["K02","20"]]}/>
    <ExampleTable caption="Vorher: Abfrage Stammdaten" head={["Kundennummer (text)","Region (text)"]} rows={[["K01","Nord"]]}/>
    <ExampleTable caption="Nachher: noch nicht erweiterter Left-Outer-Join" head={["Kundennummer","Bestand","Treffer (table)"]} rows={[["K01","10","1 Zeile: K01 / Nord"],["K02","20","Leere Tabelle"]]}/>
    <p>Der Code ergänzt eine Spalte mit verschachtelten Tabellen. Erst das Erweitern von Treffer über den Doppelpfeil macht Region zu einer normalen Spalte: K01 erhält Nord, K02 erhält null. Kontrolle: zunächst 2 Zeilen; bei eindeutigem rechten Schlüssel auch nach dem Erweitern 2. Mehrere rechte Treffer können beim Erweitern die Zeilenzahl und damit spätere Summen erhöhen.</p>
  </>;
  if(name === "if … then … else") return <p>Kontrollwerte für die Grenzen: null → Fehlt, 10000 → Niedrig, 10001 → Mittel, 100000 → Mittel, 100001 → Hoch. Die erste erfüllte Bedingung entscheidet. Prüfe fehlende Werte vor den Größenvergleichen und ändere Grenzwerte und Texte gemeinsam.</p>;
  if(name === "try … otherwise") return <p>Kontrolle mit zwei Zeilen: Text „100“ → Zahl 100; Text „unbekannt“ → null. Zähle die ungültigen Eingaben separat, bevor du den Ersatzwert akzeptierst. Ein bereits fehlender Wert und ein durch Fehlerersatz erzeugtes null sind im Ergebnis allein nicht mehr unterscheidbar.</p>;
  return null;
}
