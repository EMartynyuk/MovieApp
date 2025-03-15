export function createHref(
  path: string | null,
  type: string,
  quality?: number
): string {
  if (!path) {
    if (type === "movie") {
      return "/img/poster-unknown.jpg";
    } else if (type === "person") {
      return "/img/star-unknown.jpg";
    }
  }
  if (quality) {
    return "https://image.tmdb.org/t/p/w" + quality + path;
  }
  return "https://image.tmdb.org/t/p/original" + path;
}
