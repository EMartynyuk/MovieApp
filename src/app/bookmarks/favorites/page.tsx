import { BookmarksCategory } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Избранные фильмы",
  description: "Избранные фильмы",
};

export default function PageBookmarksCategory() {
  return <BookmarksCategory type="favorites" />;
}
