import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { contents } from "../content";
import { areas } from "../content/schema";
import { Reference } from "../pages/Reference";

describe("Öffentliche Referenzansicht", () => {
  it.each(areas)("zeigt in %s keine internen Redaktionsaufträge", (area) => {
    for (const item of contents.filter(item => item.bereich === area)) {
      const html = renderToStaticMarkup(
        <MemoryRouter initialEntries={[`/wissen/${item.slug}`]}>
          <Routes><Route path="/wissen/:slug" element={<Reference favorites={[]} onToggle={() => {}} />} /></Routes>
        </MemoryRouter>,
      );
      expect(html, item.id).not.toMatch(/\bTODO\b|Screenshot ersetzen|Ersatzaufnahme|Geplante Aufnahme|Aufnahmeplan|Arbeitsauftrag|Cedric soll|noch aufnehmen|in diesem Pass|in diesem Durchlauf|Codex|Cleanup|Qualitätspass/i);
      expect(html, item.id).toContain("Beispiele: generisch oder synthetisch");
      expect(html, item.id).toContain("Offizielle Dokumentation");
      expect(item.bereich).not.toBe("IDA");
    }
  });
});
