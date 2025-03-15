/* eslint-disable react/display-name */
import { memo } from "react";

export const AsideLogout = memo(() => {
  return (
    <button className="aside__logout">
      <svg className="aside__logout-svg">
        <use xlinkHref={"/img/sprite.svg" + "#logout"}></use>
      </svg>
      <span>Выйти</span>
    </button>
  );
});
