"use client";

import Link from "next/link";
import { useState } from "react";
import { AsideNav, AsideToggle } from "..";

export const Aside = () => {
  const [asideShow, setAsideShow] = useState(false);

  const handlerAsideShow = () => {
    setAsideShow((prev) => !prev);
  };

  return (
    <aside className={`aside ${asideShow ? "aside--active" : ""}`}>
      <Link className="aside__logo" href="/">
        MovieDB
      </Link>

      <AsideNav handlerAsideShow={handlerAsideShow} />

      {/* <AsideLogout /> */}

      <AsideToggle handlerAsideShow={handlerAsideShow} asideShow={asideShow} />
    </aside>
  );
};
