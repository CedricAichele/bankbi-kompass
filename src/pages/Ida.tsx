import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SearchForm } from "../components/ReferenceLists";
import { IdaReference } from "../components/IdaReference";
import { idaDisclaimer, idaReportingGroups } from "../content/ida";

export function IdaPage() {
  const areas=[
    {title:"Auswertungen & Reporting",description:"Daten auswählen, filtern, berechnen, verbinden und plausibilisieren.",links:[["ida-erste-auswertung","Erste Auswertung aufbauen"],["ida-filter-praxis","Filter & Parameter"],["ida-abfragen-verbinden","Abfragen verbinden"],["ida-berechnungen","Berechnungen & Aggregationen"]],more:["/ida/auswertungen","Alle Reporting-Themen"]},
    {title:"GVM",description:"Datenbasierte Geschäftsvorfälle und ihre Rolle im agree21-Umfeld verstehen.",links:[["ida-gvm","Was ist GVM?"],["ida-gvm-datenbasis","Zusammenspiel IDA und GVM"],["ida-gvm-datenbasis?abschnitt=kontrolle","Worauf bei datenbasierten Fällen achten?"]],more:["/wissen/ida-gvm","GVM verstehen"]},
    {title:"aCI-Batch",description:"Bestands- und Massenänderungen aus fachlich vorbereiteten Daten kontrolliert einordnen.",links:[["ida-ci-batch","Was ist aCI-Batch?"],["ida-ci-datenbasis","IDA → Datenbasis → Bestandsänderung"],["ida-ci-datenbasis?abschnitt=kontrolle","Plausibilisierung und Kontrolle"]],more:["/wissen/ida-ci-batch","aCI-Batch verstehen"]},
  ];
  return <><header className="page-heading"><h1>IDA / Cognos</h1><p>Praxiswissen für Auswertungen und Reporting mit agree21IDA. Im Mittelpunkt stehen Abfragen, Filter, Parameter, Berechnungen, Verknüpfungen und Plausibilitätsprüfung sowie die angrenzenden Themen GVM und aCI-Batch.</p></header><SearchForm/>
    <div className="discovery-grid ida-areas" aria-label="IDA-Hauptbereiche">{areas.map(area=><section className="discovery-card" key={area.title}><h2>{area.title}</h2><p>{area.description}</p><ul className="primary-links">{area.links.map(([id,label])=><li key={id}><Link to={"/wissen/"+id}>{label}<ChevronRight size={15}/></Link></li>)}</ul><Link className="discovery-more" to={area.more[0]}>{area.more[1]}<ArrowRight size={16}/></Link></section>)}</div>
    <section className="orientation ida-reference-entry"><h2>Formeln & Funktionen</h2><p>Mit einer Aufgabe beginnen, passende Ausdrücke finden und den richtigen Eingabekontext beachten.</p><Link className="discovery-more" to="/wissen/ida-formeln">IDA / Cognos – Formeln & Funktionen<ArrowRight size={16}/></Link></section><p className="ida-scope">{idaDisclaimer}</p></>;
}
export function IdaReportingPage() {
  return <><Breadcrumbs items={[{label:"Start",to:"/"},{label:"IDA / Cognos",to:"/bereich/ida"},{label:"Auswertungen & Reporting"}]}/><header className="page-heading"><h1>Auswertungen & Reporting</h1><p>Von der fachlichen Frage zur kontrollierten Ausgabe. Beginne mit der Zeilenebene und vertiefe danach die passende Aufgabe.</p></header><SearchForm/><div className="catalog-grid">{idaReportingGroups.map(group=><section className="catalog-group" key={group.title}><h2>{group.title}</h2><ul>{group.items.map(item=><li key={item.id}><Link to={"/wissen/"+item.id}>{item.label}<ChevronRight size={15}/></Link></li>)}</ul></section>)}</div><p className="secondary-links"><Link to="/wissen/ida-formeln">Formeln & Funktionen nachschlagen →</Link></p><p className="ida-scope">{idaDisclaimer}</p></>;
}
export function IdaExtendedReferencePage() {
  return <><Breadcrumbs items={[{label:"Start",to:"/"},{label:"IDA / Cognos",to:"/bereich/ida"},{label:"Formeln & Funktionen",to:"/wissen/ida-formeln"},{label:"Erweiterter Katalog"}]}/><header className="page-heading"><h1>IDA / Cognos – erweiterter Funktionskatalog</h1><p>Zusätzliche Funktionen und Muster mit ausdrücklich getrennten Sprach- und Ausführungskontexten. Die Auswahl ist kuratiert und kein vollständiger Herstellerindex.</p></header><IdaReference extended/></>;
}
