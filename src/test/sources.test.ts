import { describe, expect, it } from "vitest";
import { documentationLabel } from "../lib/sources";

describe("Quellenanbieter", () => {
  it.each([
    ["https://learn.microsoft.com/en-us/dax/calculate-function-dax", "Microsoft"],
    ["https://support.microsoft.com/en-us/excel/functions/xlookup-function", "Microsoft"],
    ["https://www.ibm.com/docs/en/cognos-analytics/12.0.x", "IBM"],
    ["https://ibm.com/docs", "IBM"],
    ["https://LEARN.MICROSOFT.COM./en-us/dax/", "Microsoft"],
  ])("beschriftet %s anhand der Domain", (url, provider) => {
    expect(documentationLabel(url)).toBe(`Offizielle Dokumentation · ${provider}`);
  });
  it.each([
    "https://docs.python.org/3/",
    "https://example.com/ibm.com?source=learn.microsoft.com",
    "https://ibm.com.example.org/docs",
    "https://notibm.com/docs",
    "https://learn.microsoft.com.example.org/docs",
    "https://ibm.com@example.org/docs",
    "not a URL",
  ])("erfindet für %s keinen Anbieter", (url) => {
    expect(documentationLabel(url)).toBe("Offizielle Dokumentation");
  });
});
