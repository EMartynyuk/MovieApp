import { createHref } from "@/utils/createHref";
import type { ISingleCreditsDataCast } from "./single.types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const Stars = ({ cast }: { cast: ISingleCreditsDataCast[] }) => {
  return (
    <div className="information__content-stars">
      <p className="information__content-stars-title">В главных ролях:</p>
      <ScrollArea type="always">
        <ul className="information__content-stars-items">
          {cast.map(
            ({ id, profile_path, name, character }: ISingleCreditsDataCast) => (
              <li className="information__content-star-item star-item" key={id}>
                <a className="star-item__link" href={`/person/${id}`}>
                  <div className="star-item__media">
                    <img
                      className="star-item__img"
                      src={
                        profile_path
                          ? createHref(profile_path, "person", 200)
                          : "/img/star-unknown.jpg"
                      }
                      alt={name}
                      width="140"
                      height="140"
                    />
                  </div>
                  <span className="star-item__name">{name}</span>
                  <span className="star-item__role">{character}</span>
                </a>
              </li>
            )
          )}
        </ul>
        <ScrollBar orientation="horizontal" className="scrollbar" />
      </ScrollArea>
    </div>
  );
};
