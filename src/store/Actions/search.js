const SEARCH = "SEARCH";

export default function search(string) {
  return { type: SEARCH, payload: string };
}
