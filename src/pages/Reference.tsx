import { Link, Navigate, useParams } from "react-router-dom";
import { Star, Lightbulb, ArrowUpRight } from "lucide-react";
import { contents, byId } from "../content";
import { sectionsOf, stepsOf } from "../content/schema";
import { legacyIds, archivedIdaIds, consolidatedRoutes } from "../content/redirects";
import { articleToc, articleBreadcrumbs, sectionId, workflowPhases } from "../lib/article-navigation";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArticleToc, SectionJump } from "../components/ArticleToc";
import { Markdown } from "../components/Markdown";
import { ExcelReference } from "../components/ExcelReference";
import { MReference } from "../components/MReference";
import { DaxReference } from "../components/DaxReference";
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
  if (slug && consolidatedRoutes[slug]) return <Navigate replace to={consolidatedRoutes[slug]} />;
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
  const toc = articleToc(item);
  const phaseTargets = Object.fromEntries(workflowPhases.map(p=>[p.label,sectionId(p.label)]));
  return (
    <>
      <Breadcrumbs items={articleBreadcrumbs(item)} />
      <SectionJump targets={{kontrolle: item.id === "pq-workflow" ? sectionId("Ergebnis kontrollieren") : sectionId("Plausibilitätscheck"),haeufig:"m-common",eingabe:"m-input"}} />
      <div className={toc.length ? "reference-layout with-toc" : "reference-layout"}>
      {toc.length > 0 && <ArticleToc entries={toc}/>}
      <article className={"reference" + (item.id === "power-query-m" ? " m-reference-page" : "")}>
        <header className="reference-header">
          <div>
            <span className="eyebrow">
              {item.art === "aufgabe"
                ? "WERKZEUGÜBERGREIFENDE AUFGABE"
                : item.bereich}
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
        {!["power-query-m", "dax-formeln"].includes(item.id) && <div className="answer">
          <h2>Kurzantwort</h2>
          <p>{item.kurzbeschreibung}</p>
          {item.kurzformel && <Markdown text={item.kurzformel} />}
          <div className="use-case" id={sectionId("Wann brauche ich das?")} tabIndex={-1}>
            <strong>Wann brauche ich das?</strong>
            <Markdown text={sections["Wann brauche ich das?"]} />
          </div>
        </div>
        }
        {item.bereich !== "IDA" && !["power-query-m", "dax-formeln"].includes(item.id) && <div className="location">
          <span>WO FINDE ICH DAS?</span>
          <p>{item.ort}</p>
        </div>}
        {item.bereich === "IDA" && (
          <p className="ida-label">
            Allgemeines Reportingprinzip · Bedienung kann je IDA-Umgebung abweichen. {" "}
            <Link to="/ida-hinweise">Geltungsbereich ansehen</Link>
          </p>
        )}
        {["Grundverständnis", "Voraussetzungen", "Symptom", "Schnelltest"].filter((name) => sections[name]).map((name) => (
          <section className="practice-section" key={name} id={sectionId(name)} tabIndex={-1}><h2>{name}</h2><Markdown text={sections[name]} /></section>
        ))}
        {item.id === "power-query-m" && <MReference />}
        {item.id === "dax-formeln" && <DaxReference />}
        {item.id === "excel-formeln" && <div id="excel-reference" tabIndex={-1}><ExcelReference /></div>}
        {!["power-query-m", "excel-formeln", "dax-formeln"].includes(item.id) && <div
          className={
            "reference-grid" + (illustrated ? " illustrated-reference" : "") + (["pq-workflow", "pq-benutzerdefiniert", "dateien-kombinieren"].includes(item.id) ? " workflow-reference" : "")
          }
        >
          <section className="steps" id={sectionId("Schritte")} tabIndex={-1}>
            <h2>So gehst du vor</h2>
            {illustrated ? (
              stepsOf(sections.Schritte).map((text, index) => (
                <section
                  className="illustrated-step"
                  key={index}
                  id={"article-step-"+(index+1)} tabIndex={-1}
                  aria-label={"Schritt " + (index + 1)}
                >
                  {item.id === "pq-workflow" && workflowPhases.find(p=>p.start===index+1) && <h3 className="workflow-phase" id={phaseTargets[workflowPhases.find(p=>p.start===index+1)!.label]} tabIndex={-1}>{workflowPhases.find(p=>p.start===index+1)!.label}</h3>}
                  {item.id === "pq-workflow" ? <h4>Schritt {index + 1}</h4> : <h3>Schritt {index + 1}</h3>}
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
          <section className="example" id={sectionId("Beispiel")} tabIndex={-1}>
            <h2>
              Beispiel <span>synthetisch</span>
            </h2>
            <Markdown text={sections.Beispiel} />
          </section>
        </div>}
        {["Ergebnis", "Plausibilitätscheck"].filter((name) => sections[name]).map((name) => (
          <section className="practice-section" key={name} id={sectionId(name)} tabIndex={-1}><h2>{name}</h2><Markdown text={sections[name]} /></section>
        ))}
        {item.formelreferenz && <section className="practice-section"><h2>Anpassen und Verfügbarkeit</h2><p>{item.formelreferenz.anpassen}</p><p><strong>Version:</strong> {item.formelreferenz.version}</p></section>}
        {Object.entries(sections).filter(([name]) => !["Wann brauche ich das?", "Schritte", "Beispiel", "Typischer Fehler", "Vergleich", "Voraussetzungen", "Symptom", "Schnelltest", "Ergebnis", "Plausibilitätscheck"].includes(name)).map(([name, text]) => (
          name !== "Grundverständnis" && <details className="practice-details" key={name} id={sectionId(name)} tabIndex={-1}><summary>{name}</summary><Markdown text={text} /></details>
        ))}
        <aside className="pitfall" id={sectionId("Typischer Fehler")} tabIndex={-1}>
          <Lightbulb size={21} />
          <div>
            <h2>Typischer Fehler</h2>
            <Markdown text={sections["Typischer Fehler"]} />
          </div>
        </aside>
        {sections.Vergleich && (
          <section id={sectionId("Vergleich")} tabIndex={-1}>
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
      </div>
    </>
  );
}
