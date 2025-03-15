"use client";

import { useEffect, useState } from "react";
import { useBookmarks } from "@/lib/store";
import styles from "./BookmarksGrid/BookmarksGrid.module.scss";
import { Card, Loader } from "..";

interface IBookmarksCategory {
  type: "favorites" | "loved";
}

export const BookmarksCategory = ({ type }: IBookmarksCategory) => {
  const data = useBookmarks((state) => state[type]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loader />;
  }

  if (!data.length) {
    return <h2 className={styles.title}>Список пуст!</h2>;
  }

  return (
    <ul className={styles["bookmarks-category"]}>
      {data.map((el) => (
        <Card {...el} key={el.id} />
      ))}
    </ul>
  );
};
