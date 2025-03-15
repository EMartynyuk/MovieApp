import type { IProp } from "./single.types";

export const MainInformation = ({
  data: {
    title,
    runtime,
    vote_average,
    vote_count,
    release_date,
    name,
    first_air_date,
  },
}: IProp) => {
  return (
    <div className="information__content-main">
      <h2
        className="information__content-main-item information__content-main-item--title"
        title={title ?? name}
      >
        {title ?? name}
      </h2>
      <p className="information__content-main-item">
        {release_date?.slice(0, 4) ?? first_air_date?.slice(0, 4)}
      </p>
      {runtime ? (
        <p className="information__content-main-item">{runtime} мин</p>
      ) : null}

      <div className="information__content-main-item">
        <svg className="information__content-main-item-svg">
          <use xlinkHref={"/img/sprite.svg" + "#star"}></use>
        </svg>
        <span className="information__content-main-item-rating">
          {vote_average?.toFixed(1)}
        </span>
        <span className="information__content-main-item-total">
          | {vote_count}
        </span>
      </div>
    </div>
  );
};
