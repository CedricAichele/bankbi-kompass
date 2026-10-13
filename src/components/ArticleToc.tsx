import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type { TocEntry } from "../lib/article-navigation";

export function jumpToSection(id:string) {
  const target=document.getElementById(id);
  if(!target)return;
  for(let parent:HTMLElement|null=target;parent;parent=parent.parentElement)if(parent instanceof HTMLDetailsElement)parent.open=true;
  target.scrollIntoView?.({block:"start"});
  target.focus({preventScroll:true});
}
export function SectionJump({targets}:{targets:Record<string,string>}) {
  const [params]=useSearchParams();
  const target=targets[params.get("abschnitt") || ""];
  useEffect(()=>{if(target){const frame=requestAnimationFrame(()=>jumpToSection(target));return()=>cancelAnimationFrame(frame);}},[target]);
  return null;
}
export function ArticleToc({entries}:{entries:TocEntry[]}) {
  return <aside className="article-toc"><nav aria-label="Inhaltsnavigation"><p className="toc-title">Auf dieser Seite</p><ol className="toc-desktop">{entries.map(entry=><li key={entry.target}><button onClick={()=>jumpToSection(entry.target)}>{entry.label}</button>{entry.children?.length ? <ol>{entry.children.map(child=><li key={child.target}><button onClick={()=>jumpToSection(child.target)}>{child.label}</button></li>)}</ol>:null}</li>)}</ol><label className="toc-mobile">Direkt zum Abschnitt<select defaultValue="" onChange={e=>{jumpToSection(e.target.value);e.target.value="";}}><option value="" disabled>Abschnitt wählen …</option>{entries.map(entry=>entry.children?.length ? <optgroup key={entry.target} label={entry.label}><option value={entry.target}>{entry.label}</option>{entry.children.map(child=><option key={child.target} value={child.target}>↳ {child.label}</option>)}</optgroup> : <option key={entry.target} value={entry.target}>{entry.label}</option>)}</select></label></nav></aside>;
}
