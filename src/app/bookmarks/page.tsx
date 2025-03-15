import { BookmarksGrid } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Закладки",
  description: "Сохраненные фильмы",
}

export default function PageBookmarks() {
  return <BookmarksGrid />;
}
