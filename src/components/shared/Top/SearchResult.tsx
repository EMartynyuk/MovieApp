import Link from "next/link";
import { Fragment } from "react";

interface IRequestSearch {
  backdrop_path?: null | string;
  id: number;
  name?: string;
  original_name?: string;
  overview?: string;
  poster_path?: null | string;
  media_type: "movie" | "person" | "tv";
  adult: boolean;
  original_language?: "en" | "ru";
  genre_ids?: number[];
  popularity: number;
  first_air_date?: Date;
  vote_average?: number;
  vote_count?: number;
  origin_country?: string[];
  title?: string;
  original_title?: string;
  release_date?: Date;
  video?: boolean;
  gender?: number;
  known_for_department?: "Acting" | "Production";
  profile_path?: string;
  known_for?: IRequestSearch[];
}

interface ISearchResult {
  isLoading: boolean;
  isError: Error | null;
  data: IRequestSearch[];
  inputValue: string;
  isWriting: boolean;
}

export const SearchResult = ({
  data: results,
  isLoading,
  isError,
  inputValue,
  isWriting,
}: ISearchResult) => {
  const groupByCategory = Object.groupBy(
    results,
    (item: IRequestSearch) => item.media_type
  );

  if (inputValue === "") {
    return null;
  }

  if (isWriting) {
    return (
      <ul className="search__results">
        <li className="search__result">
          <span className="search__result-title">Идет поиск...</span>
        </li>
      </ul>
    );
  }

  if (isLoading) {
    return (
      <ul className="search__results">
        <li className="search__result">
          <span className="search__result-title">Идет поиск...</span>
        </li>
      </ul>
    );
  }

  if (isError) {
    return (
      <ul className="search__results">
        <li className="search__result">
          <span className="search__result-title">Произошла ошибка :(</span>
        </li>
      </ul>
    );
  }

  if (!results.length && !isLoading) {
    return (
      <ul className="search__results">
        <li className="search__result">
          <span className="search__result-title">Ничего не найдено...</span>
        </li>
      </ul>
    );
  }

  return (
    <ul className="search__results">
      {groupByCategory.movie?.map((element: IRequestSearch, index: number) => {
        if (index === 0) {
          return (
            <Fragment key={element.id}>
              <li className="search__result">
                <span className="search__result-title">Фильмы</span>
              </li>

              <li className="search__result">
                <Link
                  className="search__result-link"
                  href={`/films/${element.id}`}
                >
                  {element.name
                    ? element.name
                    : element.original_name
                    ? element.original_name
                    : element.original_title}
                </Link>
              </li>
            </Fragment>
          );
        } else {
          return (
            <li className="search__result" key={element.id}>
              <Link
                className="search__result-link"
                href={`/films/${element.id}`}
              >
                {element.name
                  ? element.name
                  : element.original_name
                  ? element.original_name
                  : element.original_title}
              </Link>
            </li>
          );
        }
      })}
      {groupByCategory.tv?.map((element: IRequestSearch, index: number) => {
        if (index === 0) {
          return (
            <Fragment key={element.id}>
              <li className="search__result">
                <span className="search__result-title">Сериалы</span>
              </li>

              <li className="search__result">
                <Link
                  className="search__result-link"
                  href={`/serials/${element.id}`}
                >
                  {element.name
                    ? element.name
                    : element.original_name
                    ? element.original_name
                    : element.original_title}
                </Link>
              </li>
            </Fragment>
          );
        } else {
          return (
            <li className="search__result" key={element.id}>
              <Link
                className="search__result-link"
                href={`/serials/${element.id}`}
              >
                {element.name
                  ? element.name
                  : element.original_name
                  ? element.original_name
                  : element.original_title}
              </Link>
            </li>
          );
        }
      })}
      {groupByCategory.person?.map((element: IRequestSearch, index: number) => {
        if (index === 0) {
          return (
            <Fragment key={element.id}>
              <li className="search__result">
                <span className="search__result-title">Персона</span>
              </li>

              <li className="search__result">
                <Link
                  className="search__result-link"
                  href={`/person/${element.id}`}
                >
                  {element.name
                    ? element.name
                    : element.original_name
                    ? element.original_name
                    : element.original_title}
                </Link>
              </li>
            </Fragment>
          );
        } else {
          return (
            <li className="search__result" key={element.id}>
              <Link
                className="search__result-link"
                href={`/person/${element.id}`}
              >
                {element.name
                  ? element.name
                  : element.original_name
                  ? element.original_name
                  : element.original_title}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};
