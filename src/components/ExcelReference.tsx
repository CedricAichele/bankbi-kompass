import { useSearchParams, Link } from "react-router-dom";
import { contents } from "../content";
import { excelEntries } from "../content/excel-reference";
import { normalize } from "../lib/search";
import { CodeBlock } from "./CodeBlock";
import { Markdown } from "./Markdown";
const entries = excelEntries(contents);
export function ExcelReference() {
  const [params,setParams]=useSearchParams();
  const query=params.get("funktion") || "", category=params.get("gruppe") || "";
  const words=normalize(query).split(/\s+/).filter(Boolean);
  const found=entries.filter(x=>(!category || x.category===category) && words.every(w=>normalize([x.name,x.use,x.adapt,x.category].join(" ")).includes(w)));
  function update(key:string,value:string) { const next=new URLSearchParams(params); value?next.set(key,value):next.delete(key); setParams(next,{replace:true,preventScrollReset:true}); }
  return <section className="m-reference" aria-label="Excel-Formelreferenz">
    <p>Deutsche Excel-Formeln mit führendem <strong>=</strong> und Semikolons. Die Beispiele verwenden normale Zellbezüge. Kopiere die Formel in die angegebene Ergebniszelle und passe die Bereiche an. Die ausführlichen Anleitungen bleiben direkt verlinkt.</p>
    <p>Dynamische Arrays wie FILTER und SORTIERENNACH benötigen einen freien Ausgabe- beziehungsweise Überlaufbereich <strong>außerhalb einer Excel-Tabelle</strong>. Quelldaten dürfen eine Tabelle sein. Strukturierte Bezüge setzen die im Artikel erklärten Tabellen- und Spaltennamen voraus.</p>
    <div className="filters m-filters"><label>Excel-Funktion oder Aufgabe<input type="search" value={query} onChange={e=>update("funktion",e.target.value)} placeholder="z. B. Nachschlagen, Datum, Summe" /></label><label>Kategorie<select value={category} onChange={e=>update("gruppe",e.target.value)}><option value="">Alle Kategorien</option>{[...new Set(entries.map(x=>x.category))].map(x=><option key={x}>{x}</option>)}</select></label><button onClick={()=>setParams({},{replace:true,preventScrollReset:true})}>Filter zurücksetzen</button></div>
    <p role="status">{found.length} von {entries.length} Formelmustern</p>
    {!found.length && <p>Kein Treffer. Verwende einen kürzeren Begriff oder setze die Filter zurück.</p>}
    <div className="excel-results">{found.map(x=><details className="m-entry" key={x.id} open={query?true:undefined}><summary><strong>{x.name}</strong><span>{x.category}</span></summary><Markdown text={x.use}/><h3>Eingabezellen und Ausgangswerte</h3><p>{x.input}</p><p className="code-location"><strong>Excel-Formel für die Ergebniszelle</strong></p><CodeBlock language="excel" code={x.code}/><h3>Erwartetes Ergebnis</h3><Markdown text={x.result}/><h3>Was muss ich anpassen?</h3><p>{x.adapt}</p><p><strong>Version:</strong> {x.version}</p><h3>Typischer Stolperstein</h3><Markdown text={x.pitfall}/><Link to={"/wissen/"+x.id}>Ausführliche Anleitung: {x.name} →</Link></details>)}</div>
  </section>;
}
