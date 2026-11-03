import { Fragment } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { idaFunctions, idaSpellings, idaCategories, idaAvailability, findIdaFunctions, idaNormalize, type IdaFunction } from "../content/ida-reference";
import { CodeBlock } from "./CodeBlock";
import { SectionJump } from "./ArticleToc";

export function IdaFunctionDetails({entry}:{entry:IdaFunction}) {
  return <div className="ida-function-detail">
    <h3>{entry.name}</h3>
    <p className="ida-function-context">{entry.availability} · {entry.kind} · {entry.relevance}</p>
    <CodeBlock code={entry.code} language={entry.availability==="Datenquellenabhängig" ? "sql" : "cognos"}/>
    <dl className="ida-expression-notes">
      <dt>Ausgang</dt><dd>{entry.input}</dd>
      <dt>Ergebnis</dt><dd>{entry.result}</dd>
      <dt>Anpassen</dt><dd>{entry.adapt}</dd>
      <dt>Eingabe</dt><dd>{entry.where}</dd>
      <dt>Beachten</dt><dd>{entry.pitfall}</dd>
      <dt>Verfügbarkeit</dt><dd>{entry.support}</dd>
    </dl>
    <p><a href={entry.source} target="_blank" rel="noreferrer">{entry.sourceLabel} →</a></p>
  </div>;
}
export function IdaReference({extended=false}:{extended?:boolean}) {
  const [params,setParams]=useSearchParams();
  const query=params.get("funktion")||"", category=params.get("gruppe")||"", availability=params.get("kontext")||"";
  const matches=findIdaFunctions(query,category,availability,!extended);
  const selected=matches.find(e=>e.id===query || idaNormalize(e.name)===idaNormalize(query) || e.aliases.some(a=>idaNormalize(a)===idaNormalize(query))) || (query && matches.length===1 ? matches[0] : undefined);
  const pages=Math.max(1,Math.ceil(matches.length/25)),page=Math.min(pages,Math.max(1,Math.floor(Number(params.get("seite")))||1));
  const visible=extended ? matches.slice((page-1)*25,page*25) : matches;
  const noteMatches=extended && (!availability || availability==="Umgebungsabhängig / prüfen") ? idaSpellings.filter(x=>(!category||x.category===category) && idaNormalize(query).split(" ").filter(Boolean).every(term=>idaNormalize([...x.names,x.note].join(" ")).includes(term))) : [];
  function update(key:string,value:string){const next=new URLSearchParams(params);value?next.set(key,value):next.delete(key);next.delete("abschnitt");if(key!=="seite")next.delete("seite");setParams(next,{replace:true,preventScrollReset:true});}
  return <section className="ida-reference" aria-label={extended ? "Erweiterte IDA-Referenz" : "IDA-Schnellreferenz"}>
    <SectionJump targets={{detail:selected ? "ida-detail-"+selected.id : ""}}/>
    <h2 id="ida-function-search" tabIndex={-1}>{extended ? "Funktionskatalog" : "Häufig gebraucht"}</h2>
    <div className="filters reference-filters">
      <label>Funktion oder Suchwort<input type="search" value={query} onChange={e=>update("funktion",e.target.value)} placeholder="z. B. count, eindeutige Personen, Monatsende"/></label>
      <label id="ida-categories" tabIndex={-1}>Kategorie<select value={category} onChange={e=>update("gruppe",e.target.value)}><option value="">Alle Kategorien</option>{idaCategories.filter(c=>extended||c!=="Dimensional / OLAP").map(c=><option key={c}>{c}</option>)}</select></label>
      <label>Herkunft / Verfügbarkeit<select value={availability} onChange={e=>update("kontext",e.target.value)}><option value="">Alle Kontexte</option>{idaAvailability.filter(c=>extended||!["Dimensional / OLAP","Datenquellenabhängig"].includes(c)).map(c=><option key={c}>{c}</option>)}</select></label>
      <button onClick={()=>setParams({},{replace:true,preventScrollReset:true})}>Filter zurücksetzen</button>
    </div>
    <p role="status">{matches.length} Funktionen und Muster{extended ? " · Seite "+page+" von "+pages : " im Schnellbereich"}</p>
    {!matches.length && !noteMatches.length && <p>Kein Treffer. Filter zurücksetzen oder im erweiterten Katalog suchen.</p>}
    {matches.length>0 && <table className="ida-function-table" aria-label={extended ? "Erweiterter Funktionskatalog" : "Häufige IDA-Funktionen"}>
      <thead><tr><th>Kategorie</th><th>Funktion</th><th>Wofür?</th><th>Beispiel</th></tr></thead>
      <tbody>{visible.map(e=><Fragment key={e.id}>
        <tr className="ida-expression-row"><td data-label="Kategorie">{e.category}</td><th scope="row" data-label="Funktion">{e.name}<small>{e.availability}</small></th><td data-label="Wofür?">{e.use}</td><td data-label="Beispiel"><code>{e.code}</code></td></tr>
        <tr className="ida-expression-hints"><td colSpan={4}><details className="ida-expression-details" id={"ida-detail-"+e.id} open={e===selected ? true : undefined} tabIndex={-1}><summary>Hinweise zu {e.name}</summary><IdaFunctionDetails entry={e}/></details></td></tr>
      </Fragment>)}</tbody>
    </table>}
    {extended && pages>1 && <nav className="reference-pagination" aria-label="Seiten der IDA-Referenz"><button disabled={page===1} onClick={()=>update("seite",String(page-1))}>Vorherige</button><span>Seite {page} von {pages}</span><button disabled={page===pages} onClick={()=>update("seite",String(page+1))}>Weitere Funktionen</button></nav>}
    {!extended && <section className="ida-advanced" id="ida-advanced" tabIndex={-1}><h2>Erweiterter Funktionskatalog</h2><p>{idaFunctions.length} Einträge insgesamt. SQL-/Window-Muster, Regex und Dimensional / OLAP sind nach Datenquelle und Function Set gekennzeichnet.</p><Link to="/ida/referenz">Alle Funktionen anzeigen →</Link></section>}
    {noteMatches.length>0 && <details className="ida-spelling-notes" open={query ? true : undefined}><summary>Weitere Schreibweisen aus meinen Notizen · {noteMatches.length} Gruppen</summary><p>Diese Namen bleiben als Suchhilfe erhalten. Die Einordnung unterscheidet Notiznamen, belegte Alternativen und kontextabhängige Schreibweisen; sie ist keine zusätzliche Liste universell ausführbarer Cognos-Funktionen.</p>{noteMatches.map(x=><div key={x.names[0]}><p><strong>{x.names.join(" · ")}</strong></p><p>{x.note} <Link to={(idaFunctions.find(e=>e.id===x.target)!.frequent ? "/wissen/ida-formeln" : "/ida/referenz")+"?funktion="+x.target}>Zur verwandten Referenz →</Link></p></div>)}</details>}
    <details className="ida-input-help" id="ida-input"><summary>Schreibweise und Eingabekontext</summary><p>Berechnete Datenelemente erhalten einen Berichtsausdruck, Filter eine Bedingung. Eigene Datenelemente aus dem Quellenbaum einsetzen. Ein Prompt-Control erfasst Werte; ein Parameter wie <code>?pKundengruppe?</code> wird im Ausdruck verwendet. Makros stehen in <code>#...#</code>.</p><p>Die Kernsyntax ist mit IBMs Ausdrucksreferenz für Framework Manager 10.1.1 abgeglichen; der Beleg ist versionsgebunden. Cognos-12-Dokumentation ergänzt die Kontextprüfung. Im eigenen Expression Editor validieren. SQL-Beispiele gehören ausschließlich in einen dafür geeigneten Kontext der genannten Datenquelle.</p><p>Operatoren: <code>=, &lt;&gt;, &gt;, &lt;, &gt;=, &lt;=, IN, NOT IN, BETWEEN, LIKE, NOT LIKE, AND, OR, NOT, IS NULL, IS NOT NULL</code>. <Link to="/wissen/ida-reporting?abschnitt=filter">Zu den Filternotizen →</Link></p></details>
  </section>;
}
