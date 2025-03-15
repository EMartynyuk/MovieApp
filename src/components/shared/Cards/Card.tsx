import Link from "next/link";
import type { ICard } from "../Cards/types";
import { createHref } from "@/utils/createHref";

export const Card = ({
  poster_path,
  title,
  vote_average,
  id,
  name,
  first_air_date,
  typeSingle,
}: ICard) => {
  let linkTo;
  if (typeSingle) {
    linkTo = `/${typeSingle}/${id}`;
  } else {
    linkTo = first_air_date ? `/serials/${id}` : `/films/${id}`;
  }

  return (
    <li className="films__item">
      <Link className="films__item-link" href={linkTo}>
        <img
          className="films__item-img"
          src={createHref(poster_path, "movie", 200)}
          alt={"Постер " + name || title}
          title={name || title}
          width="200"
          height="315"
        />
        <div className="films__item-rating">
          <svg className="films__item-rating-svg">
            <use xlinkHref={"/img/sprite.svg" + "#star"}></use>
          </svg>
          <span className="films__item-rating-num">
            {vote_average.toFixed(1)}
          </span>
        </div>
      </Link>
    </li>
  );
};
