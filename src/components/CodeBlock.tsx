import { useState } from "react";
import { Copy, Check } from "lucide-react";
export function highlight(code: string) {
  return code
    .split(
      /("[^"\n]*"|\[[^\]\n]*\]|\b(?:CALCULATE|SUM|SUMX|DIVIDE|FILTER|COUNTROWS|DISTINCTCOUNT|REMOVEFILTERS|SELECTEDVALUE|DATESYTD|SAMEPERIODLASTYEAR|CALENDAR|DATE|XVERWEIS|SUMMEWENNS|ZÄHLENWENNS|WENN|UND|ODER|EINDEUTIG|SORTIEREN|INDEX|VERGLEICH|Table\.[A-Za-z]+|type|date)\b|\b\d+(?:\.\d+)?\b)/g,
    )
    .map((part, i) => (
      <span
        key={i}
        className={
          part.startsWith('"')
            ? "code-string"
            : part.startsWith("[")
              ? "code-field"
              : /^[A-Z]+$|^Table\.|^type$|^date$/.test(part)
                ? "code-keyword"
                : /^\d/.test(part)
                  ? "code-number"
                  : undefined
        }
      >
        {part}
      </span>
    ));
}
export function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("Kopiert");
    } catch {
      setStatus("Kopieren nicht möglich. Code bitte markieren.");
    }
  }
  return (
    <div className="codeblock">
      <div className="codebar">
        <span>
          {language === "excel"
            ? "Excel-Formel"
            : language === "m"
              ? "Power Query M"
              : language.toUpperCase() || "Code"}
        </span>
        <button onClick={copy}>
          {status === "Kopiert" ? <Check size={15} /> : <Copy size={15} />}{" "}
          Kopieren
        </button>
      </div>
      <pre>
        <code>{highlight(code)}</code>
      </pre>
      <span className="copy-status" role="status">
        {status}
      </span>
    </div>
  );
}
