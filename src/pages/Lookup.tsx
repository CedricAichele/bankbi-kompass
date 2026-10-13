import { useMemo } from "react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Search,
  X,
  ChartNoAxesColumnIncreasing,
  Table2,
  ListFilter,
  Lightbulb,
} from "lucide-react";
import { contents, byId } from "../content";
import { toolsCatalog, powerQueryGroups, frequent, type Tool, type Group } from "../content/catalog";
import { powerBiAreas, excelAreas, powerQueryAreas, commonDaxGroups, daxTasks, daxDestination, type DiscoveryArea } from "../content/discovery";
import { daxEntries } from "../content/dax-reference";
import { SectionJump } from "../components/ArticleToc";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { contexts } from "../content/schema";
import { searchContent } from "../lib/search";
import { EntryList, SearchForm, Empty } from "../components/ReferenceLists";
import { DecisionTools } from "../components/DecisionTools";
export function IdaPage() {
  return <article className="note-list"><header className="page-heading"><span className="eyebrow">In Entwicklung</span><h1>IDA</h1><p>Der IDA-Bereich wird derzeit neu aufgebaut.</p></header><h2>Geplante Themen</h2><p>Hier sollen allgemein gehaltene Inhalte zu folgenden Themen entstehen:</p><ul>{["Listen und Auswertungen","Filterlogik","Parameter","Berechnungen","Aggregationen","Mehrfachzeilen und Joins","Export","Plausibilitätsprüfung","Berichtsbetrieb"].map(x=><li key={x}>{x}</li>)}</ul><p>IDA soll langfristig ein wichtiger Teil von BankBI Kompass werden. Aktuell sind hier noch keine Anleitungen veröffentlicht.</p><p><Link to="/bereich/power-bi">Zum Power-BI-Katalog</Link> · <Link to="/bereich/excel">Zum Excel-Katalog</Link></p></article>;
}
export function PowerQueryPage() {
  return <><Breadcrumbs items={[{label:"Start",to:"/"},{label:"Power BI",to:"/bereich/power-bi"},{label:"Power Query"}]} /><header className="page-heading"><span className="eyebrow">AUSGEBAUT</span><h1>Power Query & Datenaufbereitung</h1><p>Daten laden, prüfen und für die Analyse vorbereiten. Die Transformationen gelten für Power BI und Excel.</p></header><SearchForm /><DiscoveryCards areas={powerQueryAreas} /><p className="secondary-links"><Link to="/wissen/excel-power-query">Einstieg in Excel</Link> · <Link to="/bereich/datenanalyse">Grundbegriffe verstehen</Link></p></>;
}
export function HomePage() {
  return (
    <>
      <header className="home-heading">
        <span className="eyebrow">DATENANALYSE · BUSINESS INTELLIGENCE · REPORTING</span>
        <h1>Was möchtest du machen oder finden?</h1>
        <p>BankBI Kompass hilft dir, Daten aufzubereiten, Auswertungen zu verstehen und Fehler zu lösen – mit konkreten Schritten und nachvollziehbaren Beispielen.</p>
        <p><strong>Aktueller Schwerpunkt: Power BI und Power Query.</strong> Excel ist als Praxiskatalog verfügbar; IDA wird neu aufgebaut.</p>
        <SearchForm prominent />
        <p>Suche nach einer Funktion oder deiner Frage, etwa „summe stimmt nicht“ oder „zwei tabellen verbinden“.</p>
        <p>Ein unabhängiges Praxisprojekt von <Link to="/ueber">Cedric Aichele</Link> – Wirtschaftsingenieur mit Schwerpunkt Controlling und Datenanalyse.</p>
      </header>
      <section className="frequent">
        <h2>Häufig gebraucht</h2>
        <div>
          {frequent.map((id) => (
            <Link key={id} to={"/wissen/" + id}>
              {(
                {
                  datenbereinigung: "Daten bereinigen",
                  beziehungen: "Beziehungen",
                  dubletten: "Dubletten",
                  distinctcount: "DISTINCTCOUNT",
                } as Record<string, string>
              )[id] || byId(id)!.titel}
              <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </section>
      <section className="tool-overview" aria-label="Werkzeugbereiche">
        {toolsCatalog.map((tool) => (
          <ToolOverview key={tool.slug} tool={tool} />
        ))}
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">VON DER FRAGE ZUR METHODE</span>
            <h2>Typische Aufgaben</h2>
          </div>
          <Link to="/aufgaben">
            Alle Aufgaben{" "}
            <ArrowRight size={16} />
          </Link>
        </div>
        <EntryList
          compact
          items={[
            "tabellen-verbinden",
            "eine-zeile-je-person",
            "personen-zaehlen",
            "stichtag",
            "pq-workflow",
            "dateien-kombinieren",
          ].map((id) => byId(id)!)}
        />
      </section>
      <p className="secondary-links"><Link to="/aufgaben">Typische Aufgaben</Link> · <Link to="/werkzeugwahl">Welches Werkzeug brauche ich?</Link></p>
      <div className="help-strip">
        <Lightbulb size={21} />
        <div>
          <strong>Die Zahl stimmt nicht?</strong>
          <span>
            Prüfe Summen, Filter, Mehrfachzeilen und leere Ergebnisse.
          </span>
        </div>
        <Link to="/probleme">
          Fehler eingrenzen <ArrowRight size={17} />
        </Link>
      </div>
    </>
  );
}
function ToolOverview({ tool }: { tool: Tool }) {
  const picks =
    tool.name === "Power BI"
      ? ["pq-workflow", "pq-profiling", "beziehungen", "measure"]
      : tool.name === "Excel"
        ? [
            "xverweis",
            "excel-dubletten-finden",
            "pivottable",
            "dateien-kombinieren",
          ]
        : [];
  return (
    <div className={"tool-panel " + tool.slug}>
      <div className="tool-title">
        <span className="tool-symbol">
          {tool.name === "Power BI" ? (
            <ChartNoAxesColumnIncreasing />
          ) : tool.name === "Excel" ? (
            <Table2 />
          ) : (
            <ListFilter />
          )}
        </span>
        <h2>{tool.name}</h2>
        <Link aria-label={tool.name + " öffnen"} to={"/bereich/" + tool.slug}>
          <ArrowUpRight size={21} />
        </Link>
      </div>
      <p>{tool.description}</p>
      {tool.name === "Power BI" && <Link className="tool-all" to="/power-query">Power Query & Datenaufbereitung <ArrowRight size={15} /></Link>}
      <div className="quick-links">
        {picks.map((id) => (
          <Link key={id} to={"/wissen/" + id}>
            {byId(id)!.titel}
            <ChevronRight size={16} />
          </Link>
        ))}
      </div>
      <Link className="tool-all" to={"/bereich/" + tool.slug}>
        {tool.name === "IDA" ? "Entwicklungsstand ansehen" : "Alle Themen"} <ArrowRight size={15} />
      </Link>
    </div>
  );
}
export function DiscoveryCards({areas}:{areas:DiscoveryArea[]}) {
  return <div className="discovery-grid" aria-label="Themenbereiche">{areas.map(area=><section className="discovery-card" key={area.title}><h2>{area.title}</h2><p>{area.description}</p><ul className="primary-links">{area.links.map(link=><li key={link.label}><Link to={link.to}>{link.label}<ChevronRight size={15}/></Link></li>)}</ul><Link className="discovery-more" to={area.more.to}>{area.more.label}<ArrowRight size={16}/></Link></section>)}</div>;
}
function TopicList({groups}:{groups:Group[]}) {
  return <div className="catalog-grid">{groups.map(g=><section className="catalog-group" key={g.title}><h2>{g.title}</h2><ul>{g.items.map(x=><li key={x.id}><Link to={"/wissen/"+x.id}>{x.label}<ChevronRight size={15}/></Link></li>)}</ul></section>)}</div>;
}
export function ToolPage() {
  const {slug}=useParams();
  const [params]=useSearchParams();
  const tool=toolsCatalog.find(x=>x.slug===slug);
  if(!tool) return <Empty text="Dieses Werkzeug gibt es nicht. Nutze die Navigation oder Suche."/>;
  if(tool.name==="IDA") return <IdaPage/>;
  const legacyGroup=params.get("gruppe");
  if(legacyGroup) {
    const selected=tool.groups.filter(g=>g.title===legacyGroup);
    return <><Breadcrumbs items={[{label:"Start",to:"/"},{label:tool.name,to:"/bereich/"+tool.slug},{label:legacyGroup}]} /><header className="page-heading"><h1>{legacyGroup}</h1><p>Alle Themen in diesem Bereich.</p></header><SearchForm/>{selected.length ? <TopicList groups={selected}/> : <Empty text="Diese Tätigkeitsgruppe gibt es nicht."/>}<Link className="discovery-more" to={"/bereich/"+tool.slug}>Zur Übersicht</Link></>;
  }
  return <><header className="page-heading"><h1>{tool.name}</h1><p>{tool.name==="Power BI" ? "Von der Datenquelle zur verständlichen Auswertung. Wähle den Bereich, in dem du gerade Unterstützung brauchst." : "Daten vorbereiten, die passende Formel finden und Ergebnisse auswerten."}</p></header><SearchForm/><DiscoveryCards areas={tool.name==="Power BI" ? powerBiAreas : excelAreas}/>{tool.name==="Excel" && <p className="secondary-links"><Link to="/wissen/excel-formeln">Erweiterte Formelreferenz →</Link></p>}</>;
}
export function TopicPage() {
  const {slug,topic}=useParams();
  const tool=toolsCatalog.find(x=>x.slug===slug);
  const areas=slug==="excel" ? excelAreas : [...powerBiAreas,...powerQueryAreas];
  const area=areas.find(x=>x.more.to==="/bereich/"+slug+"/themen/"+topic);
  if(!tool || !area) return <Empty text="Dieses Thema gibt es nicht. Wähle einen Bereich in der Übersicht."/>;
  const source=topic?.startsWith("pq-") ? powerQueryGroups : tool.groups;
  const groups=source.filter(g=>area.groups?.includes(g.title));
  const seen=new Set<string>();
  const completeGroups=groups.map(g=>({...g,items:[...g.items,...contents.filter(x=>x.art==="artikel" && x.kategorie===g.title && (x.bereich===tool.name || x.werkzeuge.includes(tool.name))).map(x=>({id:x.id,label:x.titel}))].filter(x=>{if(seen.has(x.id))return false;seen.add(x.id);return true;})}));
  const parent=topic?.startsWith("pq-") ? {label:"Power Query",to:"/power-query"} : {label:tool.name,to:"/bereich/"+tool.slug};
  return <><Breadcrumbs items={[{label:"Start",to:"/"},...(topic?.startsWith("pq-") ? [{label:"Power BI",to:"/bereich/power-bi"}] : []),parent,{label:area.title}]} /><header className="page-heading">{topic==="berichte" && <span className="eyebrow">In Ausbau</span>}<h1>{area.title}</h1><p>{area.description}</p></header><SearchForm/>{topic==="nachschlagen" && <section className="orientation"><h2>Formeln und Grundbegriffe</h2><p><Link to="/wissen/power-query-m">M-Formeln & Funktionen</Link> · <Link to="/dax?abschnitt=funktionen">Wichtige DAX-Funktionen</Link> · <Link to="/wissen/dax-formeln">Erweiterter DAX-Katalog</Link> · <Link to="/bereich/datenanalyse">Datenbegriffe</Link> · <Link to="/werkzeugwahl">Werkzeugwahl</Link></p></section>}<TopicList groups={completeGroups}/>{slug==="excel" && topic==="formeln" && <p><Link className="discovery-more" to="/wissen/excel-formeln">Erweiterte Formelreferenz →</Link></p>}<Link className="discovery-more" to={parent.to}>Zur Übersicht</Link></>;
}
export function Browse({
  kind,
  area,
  fixedCategory,
}: {
  kind?: string;
  area?: string;
  fixedCategory?: string;
}) {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") || "";
  const selected = area || params.get("bereich") || "";
  const category = fixedCategory || params.get("kategorie") || "";
  const context = params.get("kontext") || "";
  const level = params.get("niveau") || "";
  const result = useMemo(
    () =>
      searchContent(contents, query, {
        bereich: selected,
        kategorie: category,
        kontext: context,
        schwierigkeit: level,
        art: kind,
      }),
    [query, selected, category, context, level, kind],
  );
  const eligible = searchContent(contents, "", {
    bereich: selected,
    art: kind,
  });
  const tool = toolsCatalog.find((t) => t.name === selected);
  const categories = [
    ...new Set([
      ...eligible.map((x) => x.kategorie),
      ...(tool?.groups.map((g) => g.title) || []),
    ]),
  ].sort();
  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    if (key === "bereich") next.delete("kategorie");
    setParams(next, { replace: true });
  }
  const title =
    fixedCategory === "Werkzeugwahl"
      ? "Werkzeugwahl"
      : kind === "aufgabe"
        ? "Typische Aufgaben"
        : kind === "problem"
          ? "Probleme & Lösungen"
          : area === "Datenanalyse"
            ? "Datenbegriffe"
            : "Suchen & finden";
  if (selected === "IDA" || /\b(?:ida|cognos)\b/i.test(query)) return <Navigate replace to="/bereich/ida" />;
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">
          {kind === "aufgabe"
            ? "EIN ZIEL. MEHRERE WERKZEUGE."
            : "SCHNELL ZUR PASSENDEN HILFE"}
        </span>
        <h1>{title}</h1>
        <p>
          {kind === "aufgabe"
            ? "Wähle dein Vorhaben. Die Aufgabe zeigt passende Wege in Power BI und Excel."
            : kind === "problem"
              ? "Symptom finden, Ursache prüfen, nächsten Schritt ausführen."
              : "Suche auch nach deiner Aufgabe – du musst den Funktionsnamen nicht kennen."}
        </p>
      </header>
      {fixedCategory === "Werkzeugwahl" && <DecisionTools />}
      <div className="search-field prominent">
        <Search size={22} />
        <input
          aria-label="Suchbegriff"
          placeholder="z. B. zwei Tabellen, falsche Summe, mehrere Konten pro Kunde"
          value={query}
          onChange={(e) => update("q", e.target.value)}
        />
        {query && (
          <button
            aria-label="Suchbegriff löschen"
            onClick={() => update("q", "")}
          >
            <X size={19} />
          </button>
        )}
      </div>
      <div className="filters">
        {!area && (
          <label>
            Werkzeug
            <select
              value={selected}
              onChange={(e) => update("bereich", e.target.value)}
            >
              <option value="">Alle Werkzeuge</option>
              {["Power BI", "Excel", "IDA", "Datenanalyse"].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
        )}
        {!fixedCategory && (
          <label>
            Tätigkeit
            <select
              value={category}
              onChange={(e) => update("kategorie", e.target.value)}
            >
              <option value="">Alle Themen</option>
              {categories.map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>
        )}
        <label>
          Kontext
          <select
            value={context}
            onChange={(e) => update("kontext", e.target.value)}
          >
            <option value="">Alle Kontexte</option>
            {contexts.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Niveau
          <select
            value={level}
            onChange={(e) => update("niveau", e.target.value)}
          >
            <option value="">Alle Niveaus</option>
            <option>Grundlage</option>
            <option>Fortgeschritten</option>
          </select>
        </label>
        <button className="text-button" onClick={() => setParams({})}>
          Zurücksetzen
        </button>
      </div>
      <p className="result-count" role="status">
        {result.length} {result.length === 1 ? "Eintrag" : "Einträge"}
        {query && ` für „${query}“`}
      </p>
      {result.length ? (
        <EntryList items={result} quickView={Boolean(query.trim())} query={query} />
      ) : (
        <Empty text="Versuche einen kürzeren Begriff oder entferne einzelne Filter." />
      )}
      {kind === "problem" && (
        <details className="decision-details">
          <summary>Die richtige Methode auswählen</summary>
          <DecisionTools />
        </details>
      )}
    </>
  );
}

export function DaxPage() {
  return <><SectionJump targets={{funktionen:"dax-common"}}/><Breadcrumbs items={[{label:"Start",to:"/"},{label:"Power BI",to:"/bereich/power-bi"},{label:"DAX"}]}/><header className="page-heading"><h1>DAX</h1><p>Berechne Kennzahlen passend zu deiner Frage. Wähle eine Aufgabe oder eine häufig benötigte Funktion.</p></header><SearchForm/>
    <section className="discovery-section" aria-label="DAX-Aufgaben"><h2>Was möchtest du berechnen?</h2><p>Ich möchte …</p><div className="task-grid">{daxTasks.map(task=><Link key={task.label} to={daxDestination(task.names[0])}><strong>{task.label}</strong><span>{task.names.join(" / ")}</span><ArrowUpRight size={15}/></Link>)}</div></section>
    <section id="dax-common" tabIndex={-1} className="discovery-section" aria-label="Wichtige DAX-Funktionen"><h2>Häufig verwendete Funktionen</h2><div className="common-function-groups">{commonDaxGroups.map(group=><section key={group.title}><h3>{group.title}</h3><ul>{group.names.map(name=>{const entry=daxEntries.find(e=>e.name===name)!;return <li key={name}><Link to={daxDestination(name)}><strong>{name}</strong><span>{entry.description}</span><ChevronRight size={14}/></Link></li>;})}</ul></section>)}</div></section>
    <section className="orientation"><h2>DAX verstehen</h2><p>Die Formel allein erklärt noch nicht, welche Daten deine Kennzahl sieht.</p><div className="foundation-links">{["dax-grundlagen","measure-spalte","filterkontext","dax-variablen"].map(id=><Link key={id} to={"/wissen/"+id}>{byId(id)!.titel}<ArrowRight size={15}/></Link>)}</div></section>
    <section className="advanced-catalog"><h2>Erweiterter Funktionskatalog</h2><p>Der vollständige Katalog enthält auch Spezialfunktionen für Finanzmathematik, Modellinformationen und seltene Szenarien.</p><Link className="catalog-button" to="/wissen/dax-formeln">Alle DAX-Funktionen öffnen<ArrowRight size={17}/></Link></section>
  </>;
}
