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
import { toolsCatalog, powerQueryGroups, frequent, type Tool } from "../content/catalog";
import { contexts } from "../content/schema";
import { searchContent } from "../lib/search";
import { EntryList, SearchForm, Empty } from "../components/ReferenceLists";
import { DecisionTools } from "../components/DecisionTools";
export function IdaPage() {
  return <article className="note-list"><header className="page-heading"><span className="eyebrow">In Entwicklung</span><h1>IDA</h1><p>Der IDA-Bereich wird derzeit neu aufgebaut.</p></header><h2>Geplante Themen</h2><p>Hier sollen allgemein gehaltene Inhalte zu folgenden Themen entstehen:</p><ul>{["Listen und Auswertungen","Filterlogik","Parameter","Berechnungen","Aggregationen","Mehrfachzeilen und Joins","Export","Plausibilitätsprüfung","Berichtsbetrieb"].map(x=><li key={x}>{x}</li>)}</ul><p>IDA soll langfristig ein wichtiger Teil von BankBI Kompass werden. Aktuell sind hier noch keine Anleitungen veröffentlicht.</p><p><Link to="/bereich/power-bi">Zum Power-BI-Katalog</Link> · <Link to="/bereich/excel">Zum Excel-Katalog</Link></p></article>;
}
export function PowerQueryPage() {
  return <><header className="page-heading"><span className="eyebrow">POWER BI · GEMEINSAME TRANSFORMATIONSLOGIK MIT EXCEL</span><h1>Power Query & Datenaufbereitung</h1><p>Von einer neuen Quelle zu einer nachvollziehbar aufbereiteten Tabelle. Wähle einen Arbeitsablauf oder schlage eine konkrete Transformation nach.</p></header><section className="orientation m-entrypoint"><h2><Link to="/wissen/power-query-m">M-Formeln &amp; Funktionen</Link></h2><p>Power-Query-Code nachschlagen: passende Funktion finden, Beispiel verstehen und auf eigene Daten übertragen.</p></section><SearchForm /><section className="orientation"><h2>Neue Daten geladen? Starte hier.</h2><p><Link to="/wissen/pq-workflow">Daten in Power Query aufbereiten: der vollständige Workflow →</Link></p><ol><li>Profiling einschalten und Datentypen prüfen</li><li>Schlüssel, NULL-Werte und Dubletten verstehen</li><li>Spalten reduzieren und Text bereinigen</li><li>Struktur prüfen, Tabellen bei Bedarf kombinieren</li><li>Ergebnis plausibilisieren und laden</li></ol><p>In Excel unterscheiden sich Einstieg und Ladeziel: <Link to="/wissen/excel-power-query">Power Query in Excel verwenden</Link>.</p></section><div className="catalog-grid">{powerQueryGroups.map(g=><section className="catalog-group" key={g.title}><h2>{g.title}</h2><ul>{g.items.map(x=><li key={x.id}><Link to={"/wissen/"+x.id}><span>{x.label}</span><ChevronRight size={16}/></Link></li>)}</ul>{g.title === "M / Code" && <ul>{[["if / then / else", "Bedingungen"], ["try / otherwise und NULL", "NULL und Fehler"], ["Textfunktionen", "Text"], ["Datumsfunktionen", "Datum"]].map(([label,category]) => <li key={category}><Link to={"/wissen/power-query-m?gruppe=" + encodeURIComponent(category)}>{label}</Link></li>)}</ul>}{g.title === "Abfragen organisieren" && <p><Link to="/wissen/power-query">Angewendete Schritte verstehen und bearbeiten</Link></p>}{g.title === "Daten bereinigen" && <p>Werte ersetzen und Spalten teilen findest du in der Textbereinigung; Überschriften im Workflow.</p>}{g.title === "Fehler & Kontrolle" && <p><Link to="/wissen/pq-workflow">Abschlusskontrolle: Zeilen, Schlüssel, Fehler und Summen</Link></p>}</section>)}</div></>;
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
            Alle {contents.filter((x) => x.art === "aufgabe").length} Aufgaben{" "}
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
export function ToolPage() {
  const { slug } = useParams();
  const [params, setParams] = useSearchParams();
  const tool = toolsCatalog.find((x) => x.slug === slug);
  const group = params.get("gruppe") || "";
  if (!tool)
    return (
      <Empty text="Dieses Werkzeug gibt es nicht. Nutze die Navigation oder Suche." />
    );
  if (tool.name === "IDA") return <IdaPage />;
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">AUFGABEN & FUNKTIONEN</span>
        <h1>{tool.name}</h1>
        <p>{tool.description}</p>
      </header>
      <SearchForm />
      {tool.name === "Power BI" && <section className="orientation"><h2>Neu mit Power BI?</h2><p>Eine Orientierung vom Import bis zur verlässlichen Auswertung:</p><ol>{["daten-laden","power-query","pq-workflow","fakt-dimension","beziehungen","measure","filterkontext","balkendiagramm","summe-zu-hoch"].map(id=><li key={id}><Link to={"/wissen/"+id}>{byId(id)!.titel}</Link></li>)}</ol><Link to="/power-query">Power Query & Datenaufbereitung: alle Themen →</Link></section>}
      {tool.name === "Excel" && <section className="orientation"><h2>Von der Liste zur Auswertung</h2><p><Link to="/wissen/excel-formeln">Excel – Formeln & Funktionen: durchsuchbare Schnellreferenz →</Link></p><p><Link to="/wissen/excel-liste-vorbereiten">Daten vorbereiten</Link> → <Link to="/wissen/xverweis">Werte zuordnen</Link> → <Link to="/wissen/pivottable">Auswerten und prüfen</Link>. Wiederkehrende Lieferungen mit <Link to="/wissen/excel-power-query">Excel Power Query</Link> aufbereiten.</p></section>}
      <div className="group-tabs" aria-label="Tätigkeitsgruppen">
        <button aria-pressed={!group} onClick={() => setParams({})}>
          Alle
        </button>
        {tool.groups.map((g) => (
          <button
            key={g.title}
            aria-pressed={group === g.title}
            onClick={() => setParams({ gruppe: g.title })}
          >
            {g.title}
          </button>
        ))}
      </div>
      {group && !tool.groups.some((g) => g.title === group) ? (
        <Empty text="Diese Tätigkeitsgruppe gibt es nicht. Wähle „Alle“." />
      ) : (
        <div className="catalog-grid">
          {tool.groups
            .filter((g) => !group || g.title === group)
            .map((g) => (
              <section key={g.title} className="catalog-group">
                <h2>
                  {g.title}
                </h2>
                {g.title === "Power Query & Datenaufbereitung" && <p><Link to="/power-query">Zur vollständigen Power-Query-Übersicht →</Link></p>}
                <p className="catalog-intro">{({
                  "Daten importieren": "Die passende Quelle wählen und schon vor dem Laden Struktur und Typen prüfen.",
                  "Power Query & Datenaufbereitung": "Neue Daten systematisch verstehen, bereinigen, kombinieren und kontrollieren.",
                  "Daten prüfen & bereinigen": "Struktur, fehlende Werte, Dubletten und Kontrollsummen nachvollziehbar prüfen.",
                  "Text bearbeiten": "Leerzeichen bereinigen, Texte zerlegen und gezielt zusammensetzen.",
                  "Datum & Datentypen": "Zahlen und Datum von Text unterscheiden und mit bekannter Quellkonvention umwandeln.",
                  "Datenmodell": "Eindeutige Schlüssel und verlässliche Filterwege aufbauen.",
                  "DAX & Measures": "Kennzahlen berechnen, die auf die aktuelle Auswahl reagieren.",
                  "Zeitintelligenz": "Zeiträume mit einem gemeinsamen Kalender vergleichen.",
                  "Berichte & Visualisierung": "Die passende Darstellung wählen und ihre Filterwirkung prüfen.",
                  "Fehler & Plausibilitätsprüfung": "Vom sichtbaren Symptom zum überprüfbaren Schnelltest.",
                  "Nachschlagen & Zuordnen": "Werte sicher über passende Schlüssel zuordnen.",
                  "Filtern & eindeutige Listen": "Treffer auswählen und dynamische Ergebnislisten erstellen.",
                  "Aggregieren": "Summen, Anzahlen und Quoten auf der richtigen Ebene bilden.",
                  "Logik & Fehlerbehandlung": "Bedingungen ordnen und fehlende Treffer von echten Fehlern unterscheiden.",
                  "PivotTables & Auswertung": "Quelldaten verdichten, Felder zuordnen und Ergebnisse nach Aktualisierung prüfen.",
                  "Excel Power Query": "Wiederkehrende Aufbereitung mit der gemeinsamen Transformationsbasis aufbauen.",
                  "Typische Probleme": "Fehler in Formeln, Datentypen und Auswertungen gezielt eingrenzen.",
                } as Record<string, string>)[g.title] || `${g.title}: passende Funktion auswählen und am Beispiel nachvollziehen.`}</p>
                {["Grundlage", "Fortgeschritten"].map((level) => {
                  const entries = g.items.filter((x) => byId(x.id)?.schwierigkeit === level);
                  return entries.length ? <div key={level}><strong className="catalog-level">{level === "Grundlage" ? "Grundlagen · hier beginnen" : "Für Fortgeschrittene"}</strong><ul>
                  {entries.map((x) => (
                    <li key={x.label}>
                      <Link to={"/wissen/" + x.id}>
                        <span>{x.label}</span>
                        <ChevronRight size={16} />
                      </Link>
                    </li>
                  ))}
                </ul></div> : null;
                })}
              </section>
            ))}
        </div>
      )}
    </>
  );
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
