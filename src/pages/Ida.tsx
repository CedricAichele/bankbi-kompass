import { Link, Navigate } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SearchForm } from "../components/ReferenceLists";
import { IdaReference } from "../components/IdaReference";
import { idaDisclaimer } from "../content/ida";

export function IdaPage() {
  const pages=[
    ["ida-reporting","Auswertungen & Reporting","Mein Spickzettel für Listen, Ebenen, Filter, Joins, Prompts, Berechnungen und Kontrollen."],
    ["ida-formeln","Formeln & Funktionen","Funktion, Bedeutung und Beispiel direkt nebeneinander; weitere Hinweise zum Aufklappen."],
    ["ida-gvm","GVM","Geschäftsvorfallmanagement: IDA-Fallmenge, Vorlagenbezug und nachgelagerte Bearbeitung."],
    ["ida-ci-batch","aCI-Batch","Bestandsänderungen: Datenbasis, Schlüssel, Zielwerte und Prüfung vor und nach der Verarbeitung."],
  ];
  return <div className="ida-notes-home"><header className="page-heading"><h1>IDA / Cognos</h1><p>Meine Arbeitsnotizen zu agree21IDA und den angrenzenden Themen GVM und aCI-Batch. Hier halte ich fest, was ich für Auswertungen und ihre Weiterverwendung nachschlagen möchte.</p></header><SearchForm/><nav aria-label="IDA-Themen"><ul className="ida-note-index">{pages.map(([id,title,description])=><li key={id}><h2><Link to={"/wissen/"+id}>{title}</Link></h2><p>{description}</p></li>)}</ul></nav><p className="ida-scope">{idaDisclaimer}</p></div>;
}
export function IdaReportingPage() {
  return <Navigate replace to="/wissen/ida-reporting"/>;
}
export function IdaExtendedReferencePage() {
  return <div className="ida-notes-home"><Breadcrumbs items={[{label:"Start",to:"/"},{label:"IDA / Cognos",to:"/bereich/ida"},{label:"Formeln & Funktionen",to:"/wissen/ida-formeln"},{label:"Erweiterter Katalog"}]}/><header className="page-heading"><h1>IDA / Cognos – erweiterter Funktionskatalog</h1><p>Zusätzliche SQL-/Window- und OLAP-Ausdrücke mit ihrem Ausführungskontext. Weitere Schreibweisen aus meinen Notizen sind gesondert eingeordnet.</p></header><IdaReference extended/></div>;
}
