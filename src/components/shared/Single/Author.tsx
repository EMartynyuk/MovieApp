import { Fragment } from "react";
import type { ISingleCreditsData } from "./single.types";
import Link from "next/link";

export const Author = ({
  crew,
  title,
}: {
  crew: ISingleCreditsData[];
  title: string;
}) => {
  let slug;

  if (title === "Режиссер") {
    slug = ["Director"];
  } else {
    slug = ["Writer", "Story"];
  }

  return (
    <dl className="information__content-items">
      <dt className="information__content-item-termin">{title}:</dt>
      <dd className="information__content-item-value">
        {crew
          .filter(
            (person: ISingleCreditsData) =>
              person.job === slug[0] || person.job === slug[1]
          )
          .map( 
            (
              person: ISingleCreditsData,
              index: number,
              array: ISingleCreditsData[]
            ) => {
              if (array.length - 1 === index) {
                return (
                  <Link
                    className="information__content-item-value-link"
                    href={`/person/${person.id}`}
                    key={person.id}
                  >
                    {person.name}
                  </Link>
                );
              } else {
                return (
                  <Fragment key={person.id}>
                    <Link
                      className="information__content-item-value-link"
                      href={`/person/${person.id}`}
                    >
                      {person.name}
                    </Link>
                    {", "}
                  </Fragment>
                );
              }
            }
          )}
      </dd>
    </dl>
  );
};
