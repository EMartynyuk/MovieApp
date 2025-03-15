"use client";

import { asideNavigation } from "@/data/asideNavigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IAsideNav {
  handlerAsideShow: () => void;
}

export const AsideNav = ({ handlerAsideShow }: IAsideNav) => {
  const path = usePathname();

  return (
    <nav className="navigation">
      <ul className="navigation__items">
        {asideNavigation.map(({ title, slug, svg, svgStyle }) => (
          <li className="navigation__item" key={slug}>
            <Link
              className={`navigation__item-link ${
                path === slug ? "navigation__item-link--active" : ""
              }`}
              href={slug}
              onClick={handlerAsideShow}
            >
              <svg
                className={`navigation__item-svg navigation__item-svg--${svgStyle}`}
              >
                <use xlinkHref={"/img/sprite.svg#" + svg}></use>
              </svg>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
