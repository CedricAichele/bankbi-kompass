import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { contents } from "../content";
import type { Content } from "../content/schema";
import { sectionsOf, stepsOf } from "../content/schema";
import { Markdown } from "./Markdown";
import { searchContent } from "../lib/search";
export function EntryList({
  items,
  compact = false,
  quickView = false,
}: {
  items: Content[];
  compact?: boolean;
  quickView?: boolean;
}) {
  return (
    <div className="entry-list">
      {items.map((item) => (
        <article className="entry-card" key={item.id}>
          <Link
            className={"entry-link " + (compact ? "compact" : "")}
            to={"/wissen/" + item.slug}
            key={item.id}
          >
            <div>
              <div className="entry-top">
                <span
                  className={
                    "tool-badge " +
                    (item.bereich === "Excel"
                      ? "excel"
                      : item.bereich === "IDA"
                        ? "ida"
                        : "")
                  }
                >
                  {item.art === "aufgabe" ? "Aufgabe" : item.bereich}
                </span>
                <span>{item.kategorie}</span>
              </div>
              <h3>{item.titel}</h3>
              {!compact && <p>{item.kurzbeschreibung}</p>}
            </div>
            <ArrowUpRight size={18} />
          </Link>
          {quickView && (
            <details className="quick-preview">
              <summary>Schnellansicht: {item.titel}</summary>
              <div>
                <strong>Kurzantwort</strong><p>{item.kurzbeschreibung}</p>
                <p>Werkzeug: {item.werkzeuge.join(" / ") || item.bereich}</p>
                <ol>{(item.schnellschritte || stepsOf(sectionsOf(item.body).Schritte).slice(0, 3)).map((step, index) => <li key={index}><Markdown text={step} /></li>)}</ol>
                <strong>Beispiel</strong>
                {item.kurzformel ? <Markdown text={item.kurzformel} /> : <p>{sectionsOf(item.body).Ergebnis || "Daten und vollständiges Beispiel in der Anleitung."}</p>}
                <Link to={"/wissen/" + item.slug}>
                  Vollständige Anleitung →
                </Link>
              </div>
            </details>
          )}
        </article>
      ))}
    </div>
  );
}
export function SearchForm({ prominent = false }: { prominent?: boolean }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const live = useMemo(
    () => (query.trim() ? searchContent(contents, query).slice(0, 6) : []),
    [query],
  );
  return (
    <div className="search-wrap">
      <form
        className={"search-field " + (prominent ? "prominent" : "")}
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          setFocused(false);
          navigate("/suche?q=" + encodeURIComponent(query));
        }}
      >
        <Search size={prominent ? 23 : 18} />
        <input
          aria-label={
            prominent ? "Aufgabe oder Funktion suchen" : "Wissen durchsuchen"
          }
          placeholder={
            prominent
              ? "z. B. CALCULATE, zwei Tabellen verbinden, XVERWEIS, Dubletten, Vorjahr …"
              : "Suchen …"
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setFocused(false);
          }}
        />
        <button type="submit" aria-label="Suche starten">
          {prominent ? "Suchen" : <ArrowRight size={18} />}
        </button>
      </form>
      {prominent && focused && query.trim() && (
        <section className="instant-results" aria-label="Suchvorschläge">
          <div className="instant-head">
            <span>Direkt zum passenden Eintrag</span>
            <button
              aria-label="Suchvorschläge schließen"
              onClick={() => setFocused(false)}
            >
              <X size={16} />
            </button>
          </div>
          {live.length ? (
            live.map((item) => (
              <Link
                key={item.id}
                to={"/wissen/" + item.slug}
                onClick={() => setFocused(false)}
              >
                <span>
                  {item.titel}
                  <small>
                    {item.bereich} · {item.kategorie}
                  </small>
                </span>
                <ArrowUpRight size={17} />
              </Link>
            ))
          ) : (
            <p>Keine Treffer. Versuche einen kürzeren Begriff.</p>
          )}
          <Link
            className="all-results"
            to={"/suche?q=" + encodeURIComponent(query)}
            onClick={() => setFocused(false)}
          >
            Alle Ergebnisse und Filter <ArrowRight size={16} />
          </Link>
        </section>
      )}
    </div>
  );
}
export function Empty({ text }: { text: string }) {
  return (
    <div className="empty">
      <Search size={28} />
      <h2>Keine passenden Einträge</h2>
      <p>{text}</p>
    </div>
  );
}
