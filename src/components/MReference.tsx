import { useSearchParams, Link } from "react-router-dom";
import { mCategories, mEntries, findMEntries } from "../content/m-reference";
import { CodeBlock } from "./CodeBlock";

export function MReference() {
  const [params, setParams] = useSearchParams();
  const query = params.get("funktion") || "";
  const category = params.get("gruppe") || "";
  const matches = findMEntries(query, category);
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next, { replace: true, preventScrollReset: true });
  }
  return <section className="m-reference" aria-label="M-Funktionsreferenz">
    <p>Power Query verwendet die Formelsprache <strong>M</strong>. Viele Aktionen der Oberfläche erzeugen den Code bereits automatisch. Du musst M nicht auswendig lernen. Eigene Ausdrücke helfen bei Textbereinigung, Datumslogik, komplexeren Bedingungen, Fehlerbehandlung und wiederkehrenden oder dynamischen Transformationen.</p>
    <p>Hier findest du eine praxisorientierte Auswahl häufig benötigter M-Funktionen. Die vollständige Referenz mit mehreren hundert Funktionen findest du bei Microsoft: <a href="https://learn.microsoft.com/en-us/powerquery-m/power-query-m-function-reference" target="_blank" rel="noreferrer">Power Query M Function Reference</a> und <a href="https://learn.microsoft.com/en-us/powerquery-m/understanding-power-query-m-functions" target="_blank" rel="noreferrer">Understanding Power Query M Functions</a>.</p>
    <details className="practice-details"><summary>Eingabehilfe: Wo gebe ich M-Code ein und was passe ich an?</summary>
    <h2>Wo gebe ich Power-Query-Code ein?</h2>
    <h3>A · Benutzerdefinierte Spalte: nur der Ausdruck</h3>
    <p>Power Query Editor → Spalte hinzufügen → Benutzerdefinierte Spalte. Gib einen neuen Spaltennamen und nur den Ausdruck ein, ohne führendes Gleichheitszeichen. Hier gehört kein vollständiges Table.AddColumn hinein.</p>
    <CodeBlock language="m" code={'Text.Upper([Ort])'} />
    <p><code>[Ort]</code> ist eine vorhandene Spalte. Heißt sie Geschäftsstelle, lautet der Ausdruck <code>Text.Upper([Geschäftsstelle])</code>. Das Ergebnis steht anschließend je Zeile in der neuen Spalte.</p>
    <h3>B · Formelleiste: ein vollständiger Schritt</h3>
    <p>Ansicht → Formelleiste einschalten. Dort siehst du den ganzen M-Schritt. Über fx ergänzt du einen Schritt; beim Bearbeiten ersetzt du den ausgewählten Schritt. Verwende den tatsächlichen Namen seines Vorgängers, nicht den Namen des Schritts selbst.</p>
    <CodeBlock language="m" code={'= Table.AddColumn(\n    #"Vorheriger Schritt",\n    "Ort Groß",\n    each Text.Upper([Ort]),\n    type text\n)'} />
    <p><code>#"Vorheriger Schritt"</code> ist ein Platzhalter für einen vorhandenen Abfrageschritt, etwa <code>#"Geänderter Typ"</code>. <code>each</code> bedeutet hier: den Ausdruck für jede Zeile auswerten.</p>
    <h3>C · Erweiterter Editor: die komplette Abfrage</h3>
    <p>Start → Erweiterter Editor. <code>let</code> definiert die Schritte; <code>in</code> bestimmt den ausgegebenen Schritt. Dieses vollständige synthetische Beispiel kann in eine leere Abfrage eingefügt werden. Eine bestehende Abfrage vorher duplizieren, statt ihren Code ungeprüft zu überschreiben.</p>
    <CodeBlock language="m" code={'let\n    Quelle = #table({"Ort"}, {{" mannheim "}, {"Mannheim"}, {"MANNHEIM"}}),\n    #"Geänderter Typ" = Table.TransformColumnTypes(Quelle, {{"Ort", type text}}),\n    #"Neue Spalte" = Table.AddColumn(#"Geänderter Typ", "Ort_bereinigt", each Text.Upper(Text.Trim([Ort])), type text)\nin\n    #"Neue Spalte"'} />
    <p>Ergebnis: drei Zeilen, jeweils <strong>MANNHEIM</strong> in Ort_bereinigt. In deiner Abfrage Quelle, Spaltennamen und Schrittreferenzen anpassen. Schritte innerhalb von let trennt ein Komma; vor in steht kein zusätzliches Komma.</p>
    <h2>Was muss ich anpassen?</h2>
    <p>In <code>Text.Trim([Ort])</code> bleibt der Funktionsname Text.Trim gleich. Nur die eigene Spalte ersetzt du, etwa durch <code>[Geschäftsstelle]</code>. In <code>if [Bestand] &gt; 0 then "Aktiv" else "Inaktiv"</code> passt du Spalte, Grenzwert 0 und beide Ergebnistexte an. M ist case-sensitive: Funktions-, Spalten- und Schrittnamen müssen exakt passen. M verwendet Kommas zwischen Argumenten; keine deutschen Excel-Semikolons.</p>
    <h3>Verschachtelung: von innen nach außen lesen</h3>
    <p><code>Text.Upper(Text.Trim([Ort]))</code>: zuerst entfernt Text.Trim äußere Leerzeichen, dann vereinheitlicht Text.Upper das Ergebnis. Aus „ mannheim “, „Mannheim“ und „MANNHEIM“ wird jeweils MANNHEIM.</p>
    <p><code>Date.Year(Date.From([DatumText], "de-DE"))</code>: zuerst „23.09.2026“ in ein Datum umwandeln, dann das Jahr 2026 extrahieren. Ersetze DatumText und bei Bedarf das Gebietsschema.</p>
    <h3>Oberfläche oder eigener Ausdruck?</h3>
    <p>Spalte hinzufügen → Bedingte Spalte reicht für eine einfache Regel wie Bestand &gt; 0. Benutzerdefinierte Spalte eignet sich für Verschachtelung und mehrere Funktionen. Spalte hinzufügen → Spalte aus Beispielen lässt Power Query aus eingegebenen Zielwerten eine Transformation ableiten, etwa für Textausschnitte, Kombinationen, Datumsbestandteile und Umformatierungen. Den erzeugten Schritt anschließend mit weiteren Werten prüfen.</p>
    <p><Link to="/wissen/pq-benutzerdefiniert">Zehn vollständige Beispiele für benutzerdefinierte Spalten</Link> · <Link to="/wissen/dateien-kombinieren">Wiederkehrende Dateien mit dem Ordner-Connector</Link></p>
    </details>

    <details className="practice-details"><summary>Schnellcheatsheet: häufige Aufgaben und Formeln</summary>
    <p>Wähle eine Aufgabe, um das vollständige Beispiel aufzurufen. Anschließend lassen sich alle Filter zurücksetzen.</p>
    <div className="m-shortcuts">{["Text.Trim", "Text.Upper", "Text.Replace", "Date.Year", "Date.EndOfMonth", "Number.Round", "if … then … else", "try … otherwise", "Table.SelectRows", "Table.Group", "Table.Combine", "Table.NestedJoin"].map(name => {
      const entry = mEntries.find(x => x.name === name)!;
      return <button key={name} onClick={() => setParams({funktion: name}, {replace: true, preventScrollReset: true})}><strong>{entry.name}</strong><span>{entry.use}</span><code>{entry.code}</code></button>;
    })}</div></details>
    <h2>Funktion oder Arbeitsproblem finden</h2>
    <div className="filters m-filters"><label>Funktion oder Aufgabe<input type="search" value={query} onChange={e => update("funktion", e.target.value)} placeholder="z. B. text trim, Monatsultimo, filtern" /></label><label>Kategorie<select value={category} onChange={e => update("gruppe", e.target.value)}><option value="">Alle Kategorien</option>{mCategories.map(x => <option key={x}>{x}</option>)}</select></label><button onClick={() => setParams({}, {replace: true, preventScrollReset: true})}>Filter zurücksetzen</button></div>
    <p role="status">{matches.length} von {mEntries.length} Funktionen und Mustern</p>
    {matches.length === 0 && <p>Kein Treffer. Verwende einen kürzeren Begriff oder setze die Filter zurück.</p>}
    <div className="m-results">{matches.map(entry => <details className="m-entry" key={entry.name} open={query ? true : undefined}>
      <summary><strong>{entry.name}</strong><span>{entry.category} · {entry.use}</span></summary>
      <dl><dt>Ausgangswert</dt><dd>{entry.input}</dd></dl>
      <CodeBlock language="m" code={entry.code} />
      <dl><dt>Ergebnis</dt><dd>{entry.result}</dd><dt>Was muss ich anpassen?</dt><dd>{entry.adapt}</dd><dt>Wo eingeben?</dt><dd>{entry.where}</dd></dl>
      {entry.note && <p className="m-note">{entry.note}</p>}
      <a href={entry.source} target="_blank" rel="noreferrer">Microsoft: Syntax und Details zu {entry.name}</a>
    </details>)}</div>
  </section>;
}
