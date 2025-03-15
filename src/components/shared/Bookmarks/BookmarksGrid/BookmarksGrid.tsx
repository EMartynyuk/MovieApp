import { Bookmark, Heart } from "lucide-react";
import styles from "./BookmarksGrid.module.scss";
import Link from "next/link";

export const BookmarksGrid = () => {
  return (
    <ul className={styles.items}>
      <li className={styles.item}>
        <Link className={styles.link} href="/bookmarks/favorites">
          <p className={styles.name}>Избранное</p>
          <Bookmark className={styles.svg} />
        </Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} href="/bookmarks/loved">
          <p className={styles.name}>Любимое </p>
          <Heart className={styles.svg} />
        </Link>
      </li>
    </ul>
  );
};
