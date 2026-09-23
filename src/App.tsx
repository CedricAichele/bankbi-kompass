import { useEffect, useRef, useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import {
  Compass,
  ChartNoAxesColumnIncreasing,
  Table2,
  ListFilter,
  Star,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Lightbulb,
  Home,
  Check,
  Layers,
  Info,
} from "lucide-react";
import { contents } from "./content";
import { migrateIds } from "./content/redirects";
import { FAVORITES_KEY, readIds, saveIds, toggleId } from "./lib/storage";
import { SearchForm, EntryList } from "./components/ReferenceLists";
import { HomePage, ToolPage, Browse, PowerQueryPage } from "./pages/Lookup";
import { Reference } from "./pages/Reference";
import { Imprint, Privacy } from "./pages/Legal";
export { DecisionTools } from "./components/DecisionTools";
const nav = [
  ["/", "Start", Home],
  ["/aufgaben", "Typische Aufgaben", Check],
  ["/bereich/power-bi", "Power BI", ChartNoAxesColumnIncreasing],
  ["/power-query", "Power Query", Layers],
  ["/bereich/excel", "Excel", Table2],
  ["/bereich/ida", "IDA", ListFilter],
  ["/probleme", "Probleme & Lösungen", Lightbulb],
  ["/werkzeugwahl", "Werkzeugwahl", Compass],
  ["/bereich/datenanalyse", "Datenbegriffe", Layers],
  ["/favoriten", "Favoriten", Star],
  ["/ueber", "Über das Projekt", Info],
] as const;
const disclaimer =
  "BankBI Kompass ist ein unabhängiges Wissensprojekt für Business Intelligence und Datenanalyse im Bankkontext. Alle Beispiele sind generisch oder vollständig synthetisch. Es werden keine realen Unternehmens-, Kunden- oder Mitarbeiterdaten verarbeitet.";
function Favorites({ ids }: { ids: string[] }) {
  const items = contents.filter((x) => ids.includes(x.id));
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">SCHNELL WIEDERFINDEN</span>
        <h1>Favoriten</h1>
        <p>
          Deine gemerkten Einträge werden lokal in diesem Browser gespeichert.
          Keine Anmeldung nötig; keine Synchronisierung zwischen Geräten.
        </p>
      </header>
      {items.length ? (
        <EntryList items={items} />
      ) : (
        <div className="empty">
          <Star size={28} />
          <h2>Noch nichts gemerkt</h2>
          <p>Öffne einen Eintrag und wähle „Merken“.</p>
          <Link to="/suche">Einträge finden →</Link>
        </div>
      )}
    </>
  );
}
function About() {
  return (
    <article className="note-list">
      <h1>Über BankBI Kompass</h1>
      <p>BankBI Kompass ist mein persönliches Wissens-, Nachschlage- und Portfolio-Projekt zu Datenanalyse, Business Intelligence und Reporting. Ich bin Cedric Aichele und sammle hier Methoden, Zusammenhänge und praktische Hilfen, die ich strukturiert aufbereiten und langfristig weiterentwickeln möchte.</p>
      <p>Im Mittelpunkt steht die Verbindung fachlicher Fragen mit ihrer technischen Umsetzung: Welche Daten brauche ich, wie lassen sie sich sinnvoll modellieren und wie entsteht daraus eine nachvollziehbare Auswertung? Der öffentliche Schwerpunkt liegt heute auf Power BI, Power Query und Excel. Der IDA-Bereich ist in Entwicklung und soll langfristig ein wichtiger Teil dieser breiteren Ausrichtung werden.</p>
      <p>Als Arbeitswerkzeug begleitet es dich bei einer konkreten Frage: Eine Kurzantwort gibt Orientierung, darunter folgen Schritte, Beispiel, Ergebnis, fachliche Erklärung und typische Fehler. Offizielle Dokumentationslinks ermöglichen die Vertiefung.</p>
      <p>Die <Link to="/suche">Suche</Link> versteht auch typische Fragestellungen wie „kunde mehrfach“, „summe stimmt nicht“, „zwei tabellen verbinden“, „wert aus anderer tabelle“, „vorjahr“ oder „dubletten“. Du musst den Funktionsnamen nicht kennen. Favoriten bleiben lokal in deinem Browser gespeichert – ohne Anmeldung und ohne Synchronisierung zwischen Geräten.</p>
      <h2>Warum gibt es das Projekt?</h2>
      <p>Technische Dokumentationen sind oft sehr vollständig. Die praktische Frage „Wie löse ich damit mein konkretes Problem?“ erfordert trotzdem häufig mehrere Übersetzungsschritte. BankBI Kompass verbindet die kurze Lösung mit einem nachvollziehbaren Beispiel und erklärt, warum sie funktioniert.</p>
      <p>Ich möchte mein Wissen so festhalten, dass ich es bei wiederkehrenden Fragen wiederfinde, Zusammenhänge vertiefe und neue Erkenntnisse daran anknüpfen kann. Durch die öffentliche Aufbereitung soll daraus zugleich eine verständliche Hilfe für andere entstehen.</p>
      <h2>Für wen ist BankBI Kompass?</h2>
      <p>Für mich dient BankBI Kompass als persönliche Wissensbasis und Nachschlagewerk. Gleichzeitig soll die Seite Kolleginnen und Kollegen sowie anderen Anwendern helfen, typische Analyse- und Reportingfragen schnell zu klären. Einsteiger erhalten konkrete Anleitung; erfahrene Anwender finden Formeln, Entscheidungsregeln und Kontrollfragen zum schnellen Nachschlagen.</p>
      <p>Für interessierte Besucher macht das Projekt außerdem meine fachliche und technische Entwicklung sichtbar: wie ich Themen erschließe, Datenfragen strukturiere und Lösungen dokumentiere.</p>
      <h2>Welche Themen stehen heute im Mittelpunkt?</h2>
      <p>Der aktuelle Katalog konzentriert sich auf Power BI und Excel, mit einem ausführlichen Arbeitsablauf für die Datenaufbereitung in Power Query. Dazu gehören Datenaufbereitung mit Power Query, Datenmodellierung, DAX, Excel-Formeln und PivotTables sowie Visualisierung, Filter, Aggregation und Fehlersuche.</p>
      <p>Übergreifende Datenbegriffe und Entscheidungshilfen verbinden diese Werkzeuge. IDA/Cognos ist als künftiger Schwerpunkt vorgesehen; der Bereich wird derzeit neu aufgebaut und bietet noch keine öffentlichen Anleitungen.</p>
      <h2>Wohin soll sich das Projekt entwickeln?</h2>
      <p>BankBI Kompass soll mit meinem beruflichen und fachlichen Wissen wachsen. Die langfristige Ausrichtung umfasst neben Datenanalyse und Business Intelligence auch bankfachliche Analyse, Vertriebsmanagement, Vertriebssteuerung sowie weitere Steuerungs- und Reportingthemen.</p>
      <p>Auch allgemeine Datenverarbeitungs- und Batchprozesse, Datenqualität, Automatisierung und weitere Analysewerkzeuge können künftig hinzukommen. Dabei interessieren mich besonders wiederkehrende Verarbeitungen mit nachvollziehbaren Prüfungen und ihre Bedeutung für verlässliches Reporting. Diese Themen werden schrittweise aufgenommen, wenn ich sie verständlich und öffentlich geeignet aufbereiten kann. Die genannten Bereiche beschreiben die Entwicklungsrichtung und sind noch kein Versprechen eines vollständigen Katalogs.</p>
      <h2>Über den Entwickler</h2>
      <p>Ich habe Wirtschaftsingenieurwesen an der Hochschule Mannheim studiert und mit dem Bachelor of Engineering abgeschlossen. Beruflich beschäftige ich mich mit Controlling und Datenanalyse im Bankenumfeld. Ein Schwerpunkt meiner Arbeit liegt auf Reporting und datenbasierten Auswertungen, insbesondere mit IDA/Cognos. Daneben arbeite ich intensiv mit Excel und beschäftige mich zunehmend mit Power BI und Business Intelligence.</p>
      <p>Besonders interessiert mich die Verbindung fachlicher Fragestellungen mit Datenmodellen, Reporting und Business Intelligence. BankBI Kompass begleitet diese Entwicklung als fortlaufendes Praxisprojekt: Ich strukturiere Wissen, vertiefe Zusammenhänge und dokumentiere Lösungswege so, dass sie auch für andere nachvollziehbar werden.</p>
      <p><a href="https://github.com/CedricAichele" target="_blank" rel="noreferrer">Cedric Aichele auf GitHub</a></p>
      <h2>Qualitäts- und Datenschutzprinzipien</h2>
      <p>Beispiele zeigen Ausgangsdaten, Vorgehen und erwartete Ergebnisse. Plausibilitätschecks helfen, eine Lösung am eigenen Datenbestand zu beurteilen. Quellen verweisen möglichst direkt auf die offizielle Dokumentation. Menübezeichnungen und Funktionen können je Produktversion abweichen.</p>
      <p>Alle öffentlich gezeigten Beispieltabellen und Screenshot-Daten sind synthetisch. Veröffentlicht werden allgemeine Methoden und öffentlich vertretbare Produkt- und Technologiebezeichnungen. Konkrete Arbeitgeber, vertrauliche Kunden-, Mitarbeiter- und Unternehmensdaten, interne Feldnamen, Systemdetails, Bildschirmaufnahmen, reale Unternehmensabläufe und Unternehmenslogik bleiben ausgeschlossen.</p>
      <p>Das gilt auch für zukünftige Themen aus bankfachlicher Analyse, Vertrieb, Steuerung und Batchverarbeitung: Sie werden nur allgemein und anhand synthetischer Beispiele erläutert. Die Anleitungen lassen sich auf passende Arbeitsdaten übertragen, ohne diese auf der Website einzugeben.</p>
      <p>Die Anwendung benötigt kein Konto und bietet keine Uploads. Suche und Favoriten laufen im Browser. Einzelheiten zum Hosting und zur lokalen Speicherung stehen unter <Link to="/datenschutz">Datenschutz</Link>; Betreiberangaben und noch offene Angaben unter <Link to="/impressum">Impressum</Link>.</p>
      <h2>Ein unabhängiges Projekt</h2>
      <p>BankBI Kompass ist ein unabhängig entwickeltes Projekt und steht in keiner offiziellen Verbindung zu einem Arbeitgeber, Microsoft oder IBM.</p>
    </article>
  );
}
function NotFound() {
  return (
    <div className="empty">
      <Compass size={30} />
      <h1>Diese Seite gibt es nicht</h1>
      <p>Suche nach deiner Aufgabe oder der benötigten Funktion.</p>
      <Link to="/suche">Zur Suche →</Link>
    </div>
  );
}
const validIds = new Set(contents.map((x) => x.id));
function Shell() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [favorites, setFavorites] = useState(() =>
    migrateIds(readIds(FAVORITES_KEY), validIds),
  );
  const [error, setError] = useState("");
  const main = useRef<HTMLElement>(null);
  const first = useRef(true);
  useEffect(() => {
    setOpen(false);
    const item = contents.find(
      (x) => location.pathname === "/wissen/" + x.slug,
    );
    const title =
      item?.titel ||
      ({ "/impressum": "Impressum", "/datenschutz": "Datenschutz", "/power-query": "Power Query & Datenaufbereitung" } as Record<string, string>)[location.pathname] ||
      nav.find((x) => x[0] === location.pathname)?.[1] ||
      "Suchen & finden";
    document.title = title + " – BankBI Kompass";
    const description =
      item?.kurzbeschreibung ||
      "Schnelle Hilfe zu Power BI, Power Query und Excel. IDA ist in Entwicklung.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    window.scrollTo(0, 0);
    if (!first.current) main.current?.focus({ preventScroll: true });
    first.current = false;
  }, [location.pathname]);
  useEffect(() => {
    if (open)
      document.querySelector<HTMLAnchorElement>(".sidebar nav a")?.focus();
    function escape(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  useEffect(() => {
    function sync(e: StorageEvent) {
      if (e.key === FAVORITES_KEY || e.key === null)
        setFavorites(migrateIds(readIds(FAVORITES_KEY), validIds));
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  function toggle(id: string) {
    const next = toggleId(favorites, id);
    if (saveIds(FAVORITES_KEY, next)) {
      setFavorites(next);
      setError("");
    } else
      setError(
        "Favoriten konnten nicht gespeichert werden. Bitte erlaube lokalen Browserspeicher.",
      );
  }
  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          main.current?.focus();
          main.current?.scrollIntoView();
        }}
      >
        Zum Inhalt springen
      </a>
      <aside className={"sidebar " + (open ? "open" : "")} id="main-navigation">
        <Link to="/" className="brand">
          <Compass size={29} />
          <span>
            BankBI <b>Kompass</b>
            <small>Deine Hilfe im Arbeitsalltag</small>
          </span>
        </Link>
        <span className="nav-label">SCHNELL ZUM ZIEL</span>
        <nav aria-label="Hauptnavigation">
          {nav.map(([path, label, Icon]) => (
            <NavLink key={path} to={path} end={path === "/"}>
              <Icon size={18} />
              <span>{label}</span>
              {label === "Favoriten" && favorites.length > 0 && (
                <small>{favorites.length}</small>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-context">
          <span className="nav-label">KONTEXTE</span>
          {["Bestandsanalyse", "Kundenanalyse", "Datenqualität"].map((c) => (
            <Link key={c} to={"/suche?kontext=" + encodeURIComponent(c)}>
              {c}
              <ChevronRight size={13} />
            </Link>
          ))}
        </div>
        <div className="sidebar-note">
          <ShieldCheck size={18} />
          <p>
            Unabhängig.
            <br />
            Alle Beispiele synthetisch.
          </p>
        </div>
      </aside>
      {open && (
        <button
          className="menu-backdrop"
          aria-label="Navigation schließen"
          onClick={() => setOpen(false)}
        />
      )}
      <div className="workspace">
        <header className="topbar">
          <button
            className="menu-toggle"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <Link className="mobile-brand" to="/">
            BankBI Kompass
          </Link>
          <span className="subtitle">
            Power BI, Excel & Datenanalyse im Bankalltag
          </span>
          <SearchForm />
          <Link
            className="top-favorite"
            to="/favoriten"
            aria-label="Favoriten ansehen"
          >
            <Star size={19} />
          </Link>
        </header>
        <main ref={main} tabIndex={-1} id="main">
          {error && (
            <p className="storage-error" role="alert">
              {error}
            </p>
          )}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/suche" element={<Browse />} />
            <Route path="/aufgaben" element={<Browse kind="aufgabe" />} />
            <Route
              path="/werkzeugwahl"
              element={<Browse fixedCategory="Werkzeugwahl" />}
            />
            <Route path="/probleme" element={<Browse kind="problem" />} />
            <Route
              path="/bereich/datenanalyse"
              element={<Browse area="Datenanalyse" />}
            />
            <Route
              path="/bereich/reporting"
              element={<Navigate replace to="/bereich/ida" />}
            />
            <Route
              path="/bereich/bankprozesse"
              element={<Navigate replace to="/suche" />}
            />
            <Route
              path="/bereich/:slug"
              element={<ToolPage key={location.pathname} />}
            />
            <Route
              path="/wissen/:slug"
              element={<Reference favorites={favorites} onToggle={toggle} />}
            />
            <Route path="/favoriten" element={<Favorites ids={favorites} />} />
            <Route path="/ida-hinweise" element={<Navigate replace to="/bereich/ida" />} />
            <Route path="/power-query" element={<PowerQueryPage />} />
            <Route path="/ueber" element={<About />} />
            <Route path="/impressum" element={<Imprint />} />
            <Route path="/datenschutz" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <div>
            <ShieldCheck size={19} />
            <p>
              {disclaimer}
              <br />
              <strong>Keine offizielle Anwendung eines Kreditinstituts.</strong>
            </p>
          </div>
          <div className="footer-line">
            <span>Entwickelt von Cedric Aichele</span>
            <Link to="/ueber">Über das Projekt</Link>
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  );
}
