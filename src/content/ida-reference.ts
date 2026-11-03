import data from "./ida-functions.json";
export type IdaFunction = {id:string;name:string;category:string;use:string;syntax:string;code:string;input:string;result:string;adapt:string;pitfall:string;source:string;sourceLabel:string;availability:string;relevance:string;frequent:boolean;kind:string;where:string;support:string;aliases:string[]};
export const idaFunctions:IdaFunction[]=data.functions;
export const idaCategories=["Aggregation","Logik","NULL","Vergleiche","Text","Datum/Zeit","Typumwandlung","Zahlen","Analyse/Window","Prompt/Parameter","Dimensional / OLAP"];
export const idaAvailability=["Cognos / Reporting","Prompt-/Makrofunktion","Dimensional / OLAP","Datenquellenabhängig","Umgebungsabhängig / prüfen"];
export const idaNormalize=(s:string)=>s.toLocaleLowerCase("de").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g," ").trim();
export function findIdaFunctions(query:string,category="",availability="",quick=false){const terms=idaNormalize(query).split(/\s+/).filter(Boolean);return idaFunctions.filter(e=>(!quick||e.frequent)&&(!category||e.category===category)&&(!availability||e.availability===availability)&&terms.every(w=>idaNormalize([e.id,e.name,e.use,e.category,...e.aliases].join(" ")).includes(w)));}
