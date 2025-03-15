import { fetchOptions } from "@/data/fetchOptions";

export const getData = async (path: string) => {
  const startPath = "https://api.themoviedb.org/3/";
  const newPath = startPath + path;

  const res = await fetch(newPath, fetchOptions);
  const json = await res.json();
  return json;
};