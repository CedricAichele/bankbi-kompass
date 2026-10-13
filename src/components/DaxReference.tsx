import { useSearchParams, Link } from "react-router-dom";
import { daxEntries, daxCategories, daxChecked, daxSource, findDaxEntries, referenceNormalize } from "../content/dax-reference";
import { CodeBlock } from "./CodeBlock";
import { SyntaxBlock } from "./SyntaxBlock";

export function DaxReference() {
  const [params, setParams] = useSearchParams();
  const query = params.get("funktion") || "";
  const group = params.get("gruppe") || "";
  const relevance = params.get("relevanz") || "";
  const frequent = params.get("haeufig") === "1";
  const matches = findDaxEntries(query, group, relevance, frequent);
  const pageSize = 30;
  const pages = Math.max(1, Math.ceil(matches.length / pageSize));
  const page = Math.min(pages, Math.max(1, Math.floor(Number(params.get("seite"))) || 1));
  const visible = matches.slice((page - 1) * pageSize, page * pageSize);
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    if (key !== "seite") next.delete("seite");
    setParams(next, { replace: true, preventScrollReset: true });
  }
  return <section className="dax-reference" aria-label="DAX-Funktionsreferenz">
    <p id="dax-intro" tabIndex={-1}>DAX berechnet Kennzahlen im Datenmodell. Diese Referenz enthält den am {daxChecked.split("-").reverse().join(".")} abgeglichenen Funktionsbestand der <a href={daxSource} target="_blank" rel="noreferrer">Microsoft DAX Function Reference</a>: {daxEntries.length} Funktionen in 15 Kategorien. Die Kurzbeschreibungen ordnen die Funktionen für den Analysealltag ein; Syntax und Produktgrenzen kannst du an der jeweiligen offiziellen Quelle prüfen.</p>
    <section id="dax-reference-common" tabIndex={-1} className="orientation"><p><Link to="/dax?abschnitt=funktionen">Häufig verwendete Funktionen nach Aufgabe →</Link></p><h2>DAX verstehen, bevor du eine Formel kopierst</h2>
      <p><strong>Measure oder berechnete Spalte?</strong> Ein Measure wird für die aktuelle Auswahl berechnet. Eine berechnete Spalte speichert beim Verarbeiten des Modells einen Wert je Zeile.</p>
      <p><strong>Filterkontext</strong> entsteht etwa durch Slicer, Visualzeilen und Beziehungen. <strong>Zeilenkontext</strong> bezeichnet die aktuelle Zeile einer berechneten Spalte oder eines Iterators. Er filtert eine Aggregation nicht automatisch. <strong>CALCULATE</strong> verändert Filter und kann Zeilenkontext in Filterkontext überführen (Kontextübergang).</p>
      <p><strong>Skalar oder Tabelle?</strong> SUM liefert eine Zahl; FILTER liefert eine Tabelle, die z. B. als Filter verwendet wird. Ein Measure muss am Ende einen skalaren Wert liefern. <strong>Iteratoren</strong> wie SUMX berechnen zuerst einen Ausdruck je Zeile und aggregieren ihn anschließend.</p>
      <p><Link to="/wissen/dax-grundlagen">Grundlagen am vollständigen Beispiel →</Link> · <Link to="/wissen/measure-spalte">Measure und Spalte auswählen</Link> · <Link to="/wissen/calculate">CALCULATE</Link></p>
    </section>
    <details id="dax-input" tabIndex={-1} className="practice-details"><summary>Syntax und Eingabeort: Tabelle, Spalte, Measure, VAR / RETURN</summary>
      <p>Power BI Desktop → Modellierung → Neues Measure. Diesen Code als Measure anlegen:</p>
      <CodeBlock language="dax" code={'Bestand = SUM(Konten[Bestand])'} />
      <p><code>Konten</code> ist der Tabellenname, <code>Konten[Bestand]</code> eine Spalte und <code>[Bestand]</code> das neu angelegte Measure. Eigene Tabellen und Spalten einsetzen; Tabellennamen mit Leerzeichen in einfache Anführungszeichen setzen, etwa <code>'Monatsbestand'[Betrag]</code>.</p>
      <p>Die offizielle Syntax zeigt Platzhalter in spitzen Klammern. Eckige Klammern in einer Syntaxbeschreibung kennzeichnen oft optionale Argumente; im ausführbaren Code kennzeichnen sie Spalten oder Measures. Platzhalter und Auslassungspunkte nicht kopieren. Beispiele verwenden Kommas; aktivierte lokalisierte DAX-Trennzeichen können Semikolons erfordern.</p>
      <p><code>VAR</code> benennt einen Zwischenwert, <code>RETURN</code> gibt das Ergebnis aus. Beides sind Sprachbestandteile, keine Funktionen im Index. <Link to="/wissen/dax-variablen">VAR / RETURN mit einer Quote nachvollziehen →</Link></p>
    </details>
    <h2 id="dax-search" tabIndex={-1}>Referenz durchsuchen</h2>
    <div className="filters reference-filters">
      <label>Funktion oder Aufgabe<input type="search" value={query} onChange={e => update("funktion", e.target.value)} placeholder="z. B. eindeutige Kunden, filter ändern, rang" /></label>
      <label id="dax-categories" tabIndex={-1}>Kategorie<select value={group} onChange={e => update("gruppe", e.target.value)}><option value="">Alle Kategorien</option>{daxCategories.map(c => <option key={c}>{c}</option>)}</select></label>
      <label>Praxisrelevanz<select value={relevance} onChange={e => update("relevanz", e.target.value)}><option value="">Alle Relevanzen</option>{["Sehr häufig", "Häufig", "Situativ", "Spezial"].map(r => <option key={r}>{r}</option>)}</select></label>
      <label className="checkbox-filter"><input type="checkbox" checked={frequent} onChange={e => update("haeufig", e.target.checked ? "1" : "")} />Nur häufig verwendete</label>
      <button onClick={() => setParams({}, { replace: true, preventScrollReset: true })}>Filter zurücksetzen</button>
    </div>
    <p role="status">{matches.length} von {daxEntries.length} Funktionen · Seite {page} von {pages}</p>
    {!matches.length && <p>Kein Treffer. Kürze die Frage oder setze die Filter zurück.</p>}
    <div className="function-cards">{visible.map(e => <details className="function-card" key={e.name} open={referenceNormalize(e.name) === referenceNormalize(query) || (Boolean(query) && matches.length === 1) ? true : undefined}>
      <summary><strong>{e.name}</strong><span>{e.relevance} · {e.category}{e.advanced ? " · Neu / Fortgeschritten" : ""}</span><span>{e.description}</span></summary>
      <p><strong>Rückgabe:</strong> {e.returnType}</p>
      <h3>Offizielle Syntax</h3><SyntaxBlock code={e.syntax} />
      {e.overloads?.map(o => <div key={o.source}><h3>Variante: {o.label}</h3><SyntaxBlock code={o.syntax} /><a href={o.source} target="_blank" rel="noreferrer">Microsoft: {e.name} ({o.label})</a></div>)}
      {e.example && <><h3>Mini-Beispiel</h3><CodeBlock language="dax" code={e.example} /><p>{e.result}</p><p>Tabellen-, Spalten- und Measure-Namen durch deine eigenen ersetzen. Das Beispiel beschreibt seinen Filterkontext; vor der Übertragung eigene Beziehungen und Granularität prüfen.</p></>}
      <h3>Hinweise und Grenzen</h3><p>{e.support}</p>
      {!e.example && <p>Die Syntax ist eine Nachschlagehilfe. Parameter, erwartete Typen und Sonderfälle zuerst an der offiziellen Seite prüfen; daraus entsteht noch kein direkt einsetzbares Measure.</p>}
      {e.article && <p><Link to={"/wissen/" + e.article}>Praxisartikel mit Ausgangsdaten, Ergebnis und Fehlerprüfung →</Link></p>}
      <p><Link to={"/wissen/dax-formeln?funktion=" + encodeURIComponent(e.name)}>Direktlink zu {e.name}</Link> · <a href={e.source} target="_blank" rel="noreferrer">Microsoft: {e.name} →</a></p>
    </details>)}</div>
    {pages > 1 && <nav className="reference-pagination" aria-label="Seiten der DAX-Referenz"><button disabled={page === 1} onClick={() => update("seite", String(page - 1))}>Vorherige</button><span>Seite {page} von {pages}</span><button disabled={page === pages} onClick={() => update("seite", String(page + 1))}>Weitere Funktionen</button></nav>}
    <details className="practice-details"><summary>Neue Funktionen, eigene Funktionen, Operatoren und Statements</summary>
      <p>Neu / Fortgeschritten kennzeichnet Funktionen aus Microsofts Übersicht neuer oder aktualisierter Funktionen sowie Funktionen mit besonderem Ausführungskontext. Das bedeutet keine Unterstützung in jeder Installation. INFO-Funktionen dienen der Modellanalyse; Visualberechnungen und DAX-Abfragen besitzen andere Eingabeorte als normale Measures.</p>
      <p>Benutzerdefinierte DAX-Funktionen (UDFs) erlauben eigene wiederverwendbare Berechnungen. Deren Namen gehören nicht zum Bestand eingebauter Funktionen. Versionsstand und Modellkompatibilität beachten: <a href="https://learn.microsoft.com/en-us/dax/best-practices/dax-user-defined-functions" target="_blank" rel="noreferrer">Microsoft: DAX UDFs</a>.</p>
      <p><a href="https://learn.microsoft.com/en-us/dax/dax-operator-reference" target="_blank" rel="noreferrer">Operatoren</a> wie +, &amp;&amp; und || sowie <a href="https://learn.microsoft.com/en-us/dax/statements" target="_blank" rel="noreferrer">Statements</a> wie EVALUATE oder DEFINE sind getrennte Sprachmittel und keine Einträge dieser Funktionsliste.</p>
    </details>
  </section>;
}
