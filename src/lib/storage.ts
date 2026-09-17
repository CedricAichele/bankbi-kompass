export const FAVORITES_KEY = "bankbi:favoriten:v1";
export function readIds(key: string): string[] {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value)
      ? [...new Set(value.filter((x: unknown) => typeof x === "string"))]
      : [];
  } catch {
    return [];
  }
}
export function saveIds(key: string, ids: string[]): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(ids));
    return true;
  } catch {
    return false;
  }
}
export function toggleId(ids: string[], id: string) {
  return ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
}
