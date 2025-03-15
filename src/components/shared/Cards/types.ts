export interface ICards {
  title: string;
  query: string;
  hiddenMore?: boolean;
}

export interface RequestFilms {
  page: number;
  results: ICard[];
  total_pages: number;
  total_results: number;

  cast: ICard[];
  crew: ICard[];
  id: number;
}

export interface ICard {
  typeSingle: string,

  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path: string | null;
  release_date?: Date;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
  origin_country?: string[];
  original_name?: string;
  first_air_date?: Date;
  name?: string;
}
