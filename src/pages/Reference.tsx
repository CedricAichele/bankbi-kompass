import { Link, Navigate, useParams } from "react-router-dom";
import { Star, ChevronRight, Lightbulb, ArrowUpRight } from "lucide-react";
import { contents, byId } from "../content";
import { sectionsOf, stepsOf } from "../content/schema";
import { legacyIds, archivedIdaIds } from "../content/redirects";
import { toolsCatalog } from "../content/catalog";
import { Markdown } from "../components/Markdown";
import { ReferenceImage } from "../components/ReferenceImage";
import { DecisionTools } from "../components/DecisionTools";
import { documentationLabel } from "../lib/sources";
export function Reference({
  favorites,
  onToggle,
}: {
  favorites: string[];
  onToggle: (id: string) => void;
}) {
  const { slug } = useParams();
  if (slug && archivedIdaIds.has(slug)) return <Navigate replace to="/bereich/ida" />;
  const item = contents.find((x) => x.slug === slug);
  if (!item) {
    if (slug && legacyIds[slug])
      return <Navigate replace to={"/wissen/" + legacyIds[slug]} />;
    return (
      <div className="empty">
        <h1>Diese Seite gibt es nicht</h1>
        <Link to="/suche">Zur Suche</Link>
      </div>
    );
  }
  const sections = sectionsOf(item.body);
  const illustrated = item.screenshots.length > 0;
  const path =
    item.art === "problem"
      ? "/probleme"
      : item.art === "aufgabe"
      ? "/aufgaben"
      : item.kategorie === "Werkzeugwahl"
        ? "/werkzeugwahl"
        : item.bereich === "Datenanalyse"
          ? "/bereich/datenanalyse"
          : item.bereich === "Werkzeugübergreifend"
            ? "/suche"
            : "/bereich/" + toolsCatalog.find((t) => t.name === item.bereich)?.slug;
  return (
    <>
      <div className="breadcrumbs">
        <Link to="/">Start</Link>
        <ChevronRight size={13} />
        <Link to={path}>
          {item.art === "problem"
            ? "Problemlösungen"
            : item.art === "aufgabe"
            ? "Typische Aufgaben"
            : item.kategorie === "Werkzeugwahl"
              ? "Werkzeugwahl"
              : item.bereich}
        </Link>
        <ChevronRight size={13} />
        <span>{item.kategorie}</span>
      </div>
      <article className="reference">
        <header className="reference-header">
          <div>
            <span className="eyebrow">
              {item.art === "aufgabe"
                ? "WERKZEUGÜBERGREIFENDE AUFGABE"
                : item.bereich + " · SCHNELLREFERENZ"}
            </span>
            <h1>{item.titel}</h1>
          </div>
          <button
            className={
              "favorite-button " + (favorites.includes(item.id) ? "saved" : "")
            }
            aria-pressed={favorites.includes(item.id)}
            onClick={() => onToggle(item.id)}
          >
            <Star
              size={18}
              fill={favorites.includes(item.id) ? "currentColor" : "none"}
            />
            {favorites.includes(item.id) ? "Gemerkt" : "Merken"}
          </button>
        </header>
        <div className="answer">
          <h2>Kurzantwort</h2>
          <p>{item.kurzbeschreibung}</p>
          {item.kurzformel && <Markdown text={item.kurzformel} />}
          <div className="use-case">
            <strong>Wann brauche ich das?</strong>
            <Markdown text={sections["Wann brauche ich das?"]} />
          </div>
        </div>
        {item.bereich !== "IDA" && <div className="location">
          <span>WO FINDE ICH DAS?</span>
          <p>{item.ort}</p>
        </div>}
        {item.bereich === "IDA" && (
          <p className="ida-label">
            Allgemeines Reportingprinzip · Bedienung kann je IDA-Umgebung abweichen. {" "}
            <Link to="/ida-hinweise">Geltungsbereich ansehen</Link>
          </p>
        )}
        {["Voraussetzungen", "Symptom", "Schnelltest"].filter((name) => sections[name]).map((name) => (
          <section className="practice-section" key={name}><h2>{name}</h2><Markdown text={sections[name]} /></section>
        ))}
        <div
          className={
            "reference-grid" + (illustrated ? " illustrated-reference" : "") + (item.id === "pq-workflow" ? " workflow-reference" : "")
          }
        >
          <section className="steps">
            <h2>So gehst du vor</h2>
            {illustrated ? (
              stepsOf(sections.Schritte).map((text, index) => (
                <section
                  className="illustrated-step"
                  key={index}
                  aria-label={"Schritt " + (index + 1)}
                >
                  <h3>Schritt {index + 1}</h3>
                  <Markdown text={text} />
                  {item.screenshots
                    .filter((image) => image.schritt === index + 1)
                    .map((image, imageIndex) => (
                      <ReferenceImage key={imageIndex} image={image} />
                    ))}
                </section>
              ))
            ) : (
              <Markdown text={sections.Schritte} />
            )}
            {item.screenshots
              .filter((image) => !image.schritt)
              .map((image, index) => (
                <ReferenceImage key={index} image={image} />
              ))}
          </section>
          <section className="example">
            <h2>
              Beispiel <span>synthetisch</span>
            </h2>
            <Markdown text={sections.Beispiel} />
          </section>
        </div>
        {["Ergebnis", "Plausibilitätscheck"].filter((name) => sections[name]).map((name) => (
          <section className="practice-section" key={name}><h2>{name}</h2><Markdown text={sections[name]} /></section>
        ))}
        {Object.entries(sections).filter(([name]) => !["Wann brauche ich das?", "Schritte", "Beispiel", "Typischer Fehler", "Vergleich", "Voraussetzungen", "Symptom", "Schnelltest", "Ergebnis", "Plausibilitätscheck"].includes(name)).map(([name, text]) => (
          <details className="practice-details" key={name}><summary>{name}</summary><Markdown text={text} /></details>
        ))}
        <aside className="pitfall">
          <Lightbulb size={21} />
          <div>
            <h2>Typischer Fehler</h2>
            <Markdown text={sections["Typischer Fehler"]} />
          </div>
        </aside>
        {sections.Vergleich && (
          <section>
            <h2>Werkzeugvergleich</h2>
            <Markdown text={sections.Vergleich} />
          </section>
        )}
        <div className="context-tags">
          <strong>Relevant für:</strong>
          {item.kontexte.map((c) => (
            <Link to={"/suche?kontext=" + encodeURIComponent(c)} key={c}>
              {c}
            </Link>
          ))}
        </div>
        <section className="related">
          <h2>Verwandte Themen</h2>
          <div>
            {item.verwandteThemen.map((id) => (
              <Link key={id} to={"/wissen/" + id}>
                {byId(id)!.titel}
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        </section>
        {item.id === "measure-spalte" && (
          <details className="decision-details">
            <summary>Noch unsicher? Methode kurz prüfen</summary>
            <DecisionTools />
          </details>
        )}
        <div className="reference-footer">
          <span>
            Stand:{" "}
            {new Date(item.zuletztGeprueft + "T12:00:00").toLocaleDateString(
              "de-DE",
            )}{" "}
            · Beispiele: generisch oder synthetisch
          </span>
          {item.quellen.map((url, i) => (
            <a key={url} href={url} target="_blank" rel="noreferrer">
              {documentationLabel(url)}
              {item.quellen.length > 1 ? " " + (i + 1) : ""}{" "}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </article>
    </>
  );
}
