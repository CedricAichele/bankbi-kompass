import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { byId } from "../content";
import { sectionsOf, type Content } from "../content/schema";
import { idaSectionKey } from "../content/ida";
import { articleBreadcrumbs, articleToc } from "../lib/article-navigation";
import { documentationLabel } from "../lib/sources";
import { ArticleToc, SectionJump } from "./ArticleToc";
import { Breadcrumbs } from "./Breadcrumbs";
import { Markdown } from "./Markdown";
import { IdaReference } from "./IdaReference";

export function IdaNote({item, saved, onToggle}:{item:Content; saved:boolean; onToggle:(id:string)=>void}) {
  const intro=item.body.split(/^## /m)[0].trim();
  const sections=Object.entries(sectionsOf(item.body));
  const toc=articleToc(item);
  const targets=Object.fromEntries(sections.map(([title])=>[idaSectionKey(title),"ida-"+idaSectionKey(title)]));
  return <>
    <Breadcrumbs items={articleBreadcrumbs(item)}/>
    <SectionJump targets={targets}/>
    <div className={toc.length ? "reference-layout with-toc ida-note-layout" : "ida-note-layout"}>
      {toc.length>0 && <ArticleToc entries={toc}/>}
      <article className="ida-note">
        <header className="ida-note-header"><h1>{item.titel}</h1><button className={"favorite-button "+(saved ? "saved" : "")} aria-pressed={saved} onClick={()=>onToggle(item.id)}><Star size={17} fill={saved ? "currentColor" : "none"}/>{saved ? "Gemerkt" : "Merken"}</button></header>
        <div className="ida-note-intro"><Markdown text={intro}/></div>
        {item.id==="ida-formeln" ? <IdaReference/> : sections.map(([title,text])=><section className="ida-note-section" key={title} id={"ida-"+idaSectionKey(title)} tabIndex={-1}><h2>{title}</h2><Markdown text={text}/></section>)}
        <nav className="ida-note-related" aria-label="Weiterführend">{item.verwandteThemen.slice(0,4).map(id=><Link key={id} to={"/wissen/"+id}>{byId(id)!.titel}</Link>)}</nav>
        <footer className="ida-note-footer"><span>Stand: {new Date(item.zuletztGeprueft+"T12:00:00").toLocaleDateString("de-DE")}</span><details><summary>{item.id==="ida-gvm" || item.id==="ida-ci-batch" ? "Öffentliche Begriffs- und Produktquellen" : "Quellen zur Syntax und Einordnung"}</summary><ul>{item.quellen.map((url,i)=><li key={url}><a href={url} target="_blank" rel="noreferrer">{documentationLabel(url)} {i+1}</a></li>)}</ul></details></footer>
      </article>
    </div>
  </>;
}
