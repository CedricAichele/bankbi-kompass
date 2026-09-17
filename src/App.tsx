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
import { HomePage, ToolPage, Browse } from "./pages/Lookup";
import { Reference } from "./pages/Reference";
export { DecisionTools } from "./components/DecisionTools";
const nav = [
  ["/", "Start", Home],
  ["/aufgaben", "Typische Aufgaben", Check],
  ["/bereich/power-bi", "Power BI", ChartNoAxesColumnIncreasing],
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
          Deine gemerkten Einträge. Ausschließlich in diesem Browser
          gespeichert.
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
function IdaNotes() {
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">INHALTSGRENZEN</span>
        <h1>IDA: Was noch offen ist</h1>
        <p>
          Die Einträge erklären allgemeine Listen-, Filter- und
          Auswertungsprinzipien. Sie behaupten keine systemspezifische
          Bedienung.
        </p>
      </header>
      <div className="note-list">
        <h2>TODO – erst mit öffentlichem Beleg ergänzen</h2>
        <ul>
          <li>
            Konkrete Menüpfade für Listen, Filter und berechnete Datenelemente.
          </li>
          <li>
            Parameterdialoge, Mehrfachwerte, Übergabe und Parameteranzeige.
          </li>
          <li>
            Genaue Ausdruckssyntax, NULL-Funktionen und verfügbare
            Median-Funktion.
          </li>
          <li>Exportdialoge, CSV-Optionen und mögliche Mengenbegrenzungen.</li>
          <li>
            Ausführung, Aktualisierung und Berichtsbetrieb, soweit öffentlich
            dokumentierbar.
          </li>
        </ul>
        <h2>Geeignete Abbildungen</h2>
        <p>
          Nur selbst erstellte, generische Schemen oder Mock-ups mit erfundenen
          Daten. Keine Bildschirmaufnahmen aus internen IDA-Systemen.
        </p>
        <Link to="/bereich/ida">Zu den allgemeinen IDA-Hilfen →</Link>
      </div>
    </>
  );
}
function About() {
  return (
    <>
      <header className="page-heading">
        <span className="eyebrow">UNABHÄNGIGES WISSENSPROJEKT</span>
        <h1>Über BankBI Kompass</h1>
        <p>Power BI, Excel & Datenanalyse im Bankalltag</p>
      </header>
      <div className="note-list">
        <h2>Eine Hilfe neben deinem Werkzeug</h2>
        <p>
          Eine Frage eingeben, den passenden Eintrag öffnen, Schritte und
          Beispiel direkt nutzen. BankBI Kompass ist eine Schnellreferenz für
          die tägliche Arbeit.
        </p>
        <h2>Datenschutz und Vertraulichkeit</h2>
        <p>{disclaimer}</p>
        <p>
          <strong>Keine offizielle Anwendung eines Kreditinstituts.</strong> Es
          gibt keine Anmeldung, Uploads, Datenbank, externe KI, Tracking oder
          Cookies der Anwendung. Nur Favoriten werden lokal gespeichert. Externe
          Quellen werden erst nach einem Klick geöffnet.
        </p>
        <p>
          Beim Abruf einer gehosteten Website erhält der Hostinganbieter
          technisch notwendige Verbindungsdaten. Die lokale Favoritenliste wird
          nicht übertragen.
        </p>
        <h2>Inhalte und Abbildungen</h2>
        <p>
          IDA-Inhalte bleiben auf allgemeine Reportingprinzipien begrenzt.
          Menübezeichnungen von Power BI und Excel können je Version abweichen.
          Alle Beispiele und die schematischen Abbildungen sind selbst erstellt
          und synthetisch.
        </p>
        <h2>Entwickelt von Cedric Aichele</h2>
        <p>
          Ohne Arbeitgeberbezug, Firmenlogo oder interne
          Unternehmensinformationen.
        </p>
      </div>
    </>
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
      nav.find((x) => x[0] === location.pathname)?.[1] ||
      "Suchen & finden";
    document.title = title + " – BankBI Kompass";
    const description =
      item?.kurzbeschreibung ||
      "Schnelle Hilfe zu Power BI, Excel und IDA: Aufgaben, Funktionen, Schritte und synthetische Beispiele.";
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
            <Route path="/ida-hinweise" element={<IdaNotes />} />
            <Route path="/ueber" element={<About />} />
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
            <Link to="/ueber">Über das Projekt & Datenschutz</Link>
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
