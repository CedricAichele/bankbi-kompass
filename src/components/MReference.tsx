import { useState } from "react";
import { MDetailContext, mInputType, mRelated, mUseContext } from "./MDetailContext";
import { useSearchParams, Link } from "react-router-dom";
import { mCategories, mEntries, findMEntries } from "../content/m-reference";
import { CodeBlock } from "./CodeBlock";

export function MReference() {
  const [params, setParams] = useSearchParams();
  const query = params.get("funktion") || "";
  const category = params.get("gruppe") || "";
  const matches = findMEntries(query, category);
  const [opened, setOpened] = useState<string[]>([]);
  const exact = matches.find(x => x.name.toLocaleLowerCase() === query.trim().toLocaleLowerCase());
  const selected = matches.filter(x => opened.includes(x.name) || x === exact || (query && matches.length === 1));
  const detailId = (name:string) => "m-detail-" + name.replace(/[^a-zA-Z0-9]/g, "-");
  function show(name:string) {
    setOpened(old => old.includes(name) ? old : [...old,name]);
    requestAnimationFrame(() => {
      const element = document.getElementById(detailId(name)) as HTMLDetailsElement | null;
      if(element) { element.open = true; element.scrollIntoView?.({block:"start"}); element.focus(); }
    });
  }
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next, { replace: true, preventScrollReset: true });
  }
  return <section className="m-reference m-workbench" aria-label="M-Funktionsreferenz">
    <p>Power Query verwendet die Formelsprache <strong>M</strong>. Viele Aktionen der Oberfläche erzeugen den Code bereits automatisch. Du musst M nicht auswendig lernen. Eigene Ausdrücke helfen bei Textbereinigung, Datumslogik, komplexeren Bedingungen, Fehlerbehandlung und wiederkehrenden oder dynamischen Transformationen.</p>
    <p>Hier findest du eine praxisorientierte Auswahl häufig benötigter M-Funktionen. Die vollständige Referenz mit mehreren hundert Funktionen findest du bei Microsoft: <a href="https://learn.microsoft.com/en-us/powerquery-m/power-query-m-function-reference" target="_blank" rel="noreferrer">Power Query M Function Reference</a> und <a href="https://learn.microsoft.com/en-us/powerquery-m/understanding-power-query-m-functions" target="_blank" rel="noreferrer">Understanding Power Query M Functions</a>.</p>
    <p><strong>Drei Eingabeebenen:</strong> Benutzerdefinierte Spalte = einzelner Ausdruck ohne führendes =. Formelleiste = vollständiger Schritt mit =. Erweiterter Editor = komplette let/in-Abfrage. Der passende Eingabeort steht jeweils vor dem Code.</p>
    <h2>Funktion oder Arbeitsproblem finden</h2>
    <div className="filters m-filters"><label>Funktion oder Aufgabe<input type="search" value={query} onChange={e => update("funktion", e.target.value)} placeholder="z. B. text trim, Monatsultimo, filtern" /></label><label>Kategorie<select value={category} onChange={e => update("gruppe", e.target.value)}><option value="">Alle Kategorien</option>{mCategories.map(x => <option key={x}>{x}</option>)}</select></label><button onClick={() => {setOpened([]); setParams({}, {replace: true, preventScrollReset: true});}}>Filter zurücksetzen</button></div>
    <p role="status">{matches.length} von {mEntries.length} Funktionen und Mustern</p>
    {matches.length === 0 && <p>Kein Treffer. Verwende einen kürzeren Begriff oder setze die Filter zurück.</p>}
    {matches.length > 0 && <div className="m-overview-scroll" role="region" aria-label="Formelübersicht" tabIndex={0}><table className="m-overview">
      <caption>Funktionen vergleichen · Codevorschauen dienen der Orientierung; vollständigen Code unter Details kopieren.</caption>
      <thead><tr><th scope="col">Funktion oder Muster</th><th scope="col">Wann brauche ich das?</th><th scope="col">Codevorschau</th><th scope="col">Eingabeort</th><th scope="col">Details</th></tr></thead>
      <tbody>{matches.map(entry=><tr key={entry.name}><th scope="row">{entry.name}</th><td data-label="Wann brauche ich das?">{entry.use}</td><td data-label="Codevorschau"><code>{entry.code.replace(/\s+/g," ").slice(0,82)}{entry.code.replace(/\s+/g," ").length>82 ? " … (gekürzt)" : ""}</code></td><td data-label="Eingabeort">{entry.name.startsWith("Table.") ? "Formelleiste" : "Benutzerdefinierte Spalte"}</td><td><button aria-label={"Details zu " + entry.name} onClick={()=>show(entry.name)}>Details öffnen</button></td></tr>)}</tbody>
    </table></div>}
    <div className="m-results" aria-label="Ausgewählte Funktionsdetails">
    {selected.length>0 && <h2>Ausgewählte Funktionen im Detail</h2>}
    {selected.map(entry => <details className="m-entry" key={entry.name} id={detailId(entry.name)} tabIndex={-1} open>
      <summary><strong>{entry.name}</strong><span>{entry.category}</span></summary>
      <h3>Was macht die Funktion?</h3><p>{entry.use}</p>
      <h3>Wann brauche ich sie?</h3><p>{mUseContext(entry)}</p>
      <h3>Wo gebe ich den Code ein?</h3><p>{entry.where} {entry.name.startsWith("Table.") ? "Der Schritt liefert eine neue Ergebnistabelle; die Quelldatei bleibt unverändert." : "Der Ausdruck berechnet den Wert einer neuen Spalte je Zeile; die Quellspalte bleibt erhalten."}</p>
      <h3>Ausgangsdaten und benötigte Datentypen</h3><dl><dt>Ausgangswert</dt><dd>{entry.input}</dd></dl><p>{mInputType(entry)}</p>
      <p className="code-location"><strong>{entry.name.startsWith("Table.") ? "Formelleiste – vollständiger Abfrageschritt" : "Benutzerdefinierte Spalte – nur den Ausdruck eingeben"}</strong></p>
      <CodeBlock language="m" code={entry.code} />
      <h3>Erwartetes Ergebnis</h3><p>{entry.result}</p>
      <MDetailContext name={entry.name}/>
      <h3>Was muss ich anpassen?</h3><p>{entry.adapt}</p>
      {entry.code.includes('Vorheriger Schritt') && <p><code>#"Vorheriger Schritt"</code> ersetzt du durch den tatsächlichen Namen des vorhergehenden Schritts deiner Abfrage. Der Name darf nicht auf den neu angelegten Schritt selbst zeigen.</p>}
      <h3>Typische Fehler und relevante Grenzfälle</h3>
      {entry.note && <p className="m-note">{entry.note}</p>}
      <p>Teste das Beispiel und zusätzlich fehlende Werte, leeren Text und unerwartete Datentypen. null ist kein leerer Text und keine 0; ein Ersatzwert braucht eine fachliche Begründung. Vergleiche das Ergebnis mit dem angegebenen Sollwert, bevor du die Regel auf weitere Daten überträgst.</p>
      {entry.name.startsWith("List.") && <p>Eine Liste entsteht etwa durch eine Spaltenauswahl innerhalb einer Gruppierung: <Link to="/wissen/power-query-m?funktion=Table.Group">Table.Group mit List.Sum nachvollziehen</Link>. [Werte] bezeichnet hier eine Zelle mit einer Liste wie {"{10, 20, 30}"}; eine einzelne Zahl ist keine Liste.</p>}
      <h3>Weiterführende Anleitung</h3><p><Link to={"/wissen/"+mRelated(entry)}>Passende Praxisanleitung →</Link></p>
      <a href={entry.source} target="_blank" rel="noreferrer">Microsoft: Syntax und Details zu {entry.name}</a>
    </details>)}</div>
    <h2>M-Code verstehen und übertragen</h2>
    <details className="practice-details"><summary>Eingabehilfe: Wo gebe ich M-Code ein und was passe ich an?</summary>
    <h2>Wo gebe ich Power-Query-Code ein?</h2>
    <h3>A · Benutzerdefinierte Spalte: nur der Ausdruck</h3>
    <p>Power Query Editor → Spalte hinzufügen → Benutzerdefinierte Spalte. Gib einen neuen Spaltennamen und nur den Ausdruck ein, ohne führendes Gleichheitszeichen. Hier gehört kein vollständiges Table.AddColumn hinein.</p>
    <p className="code-location"><strong>Ausdruck für Benutzerdefinierte Spalte</strong></p>
    <CodeBlock language="m" code={'Text.Upper([Ort])'} />
    <p><code>[Ort]</code> ist eine vorhandene Spalte. Heißt sie Geschäftsstelle, lautet der Ausdruck <code>Text.Upper([Geschäftsstelle])</code>. Das Ergebnis steht anschließend je Zeile in der neuen Spalte.</p>
    <h3>B · Formelleiste: ein vollständiger Schritt</h3>
    <p>Ansicht → Formelleiste einschalten. Dort siehst du den ganzen M-Schritt. Über fx ergänzt du einen Schritt; beim Bearbeiten ersetzt du den ausgewählten Schritt. Verwende den tatsächlichen Namen seines Vorgängers, nicht den Namen des Schritts selbst.</p>
    <p className="code-location"><strong>Vollständiger Schritt für die Formelleiste</strong></p>
    <CodeBlock language="m" code={'= Table.AddColumn(\n    #"Vorheriger Schritt",\n    "Ort Groß",\n    each Text.Upper([Ort]),\n    type text\n)'} />
    <p><code>#"Vorheriger Schritt"</code> ist ein Platzhalter für einen vorhandenen Abfrageschritt, etwa <code>#"Geänderter Typ"</code>. <code>each</code> bedeutet hier: den Ausdruck für jede Zeile auswerten.</p>
    <h3>C · Erweiterter Editor: die komplette Abfrage</h3>
    <p>Start → Erweiterter Editor. <code>let</code> definiert die Schritte; <code>in</code> bestimmt den ausgegebenen Schritt. Dieses vollständige synthetische Beispiel kann in eine leere Abfrage eingefügt werden. Eine bestehende Abfrage vorher duplizieren, statt ihren Code ungeprüft zu überschreiben.</p>
    <p className="code-location"><strong>Komplette Abfrage für den Erweiterten Editor</strong></p>
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

  </section>;
}
