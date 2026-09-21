/** Provider names depend on the URL host, never on text in a path or query. */
export function documentationLabel(url: string): string {
  let provider: string | undefined;
  try {
    const { hostname } = new URL(url);
    const host = hostname.toLowerCase().replace(/\.$/, "");
    if (host === "learn.microsoft.com" || host === "support.microsoft.com") {
      provider = "Microsoft";
    } else if (host === "ibm.com" || host.endsWith(".ibm.com")) {
      provider = "IBM";
    }
  } catch {
    // Invalid or unfamiliar URLs must not be assigned an invented provider.
  }
  return "Offizielle Dokumentation" + (provider ? " · " + provider : "");
}
