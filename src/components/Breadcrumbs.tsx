import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };
export function Breadcrumbs({items}:{items:Crumb[]}) {
  return <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">{items.map((item,index)=><span className="breadcrumb-part" key={index}>{index>0 && <ChevronRight size={13}/>} {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}
