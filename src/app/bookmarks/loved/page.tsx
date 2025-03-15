import { BookmarksCategory } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Любимые фильмы",
  description: "Любимые фильмы",
};

export default function PageBookmarksCategory() {
  return <BookmarksCategory type="loved" />;
}
