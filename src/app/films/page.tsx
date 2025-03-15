import { Cards } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фильмы",
  description: "Каталог фильмов",
};

export default function PageFilms() {
  return (
    <section className="primary">
      <Cards
        title="В тренде за неделю"
        query="trending/movie/week?language=ru"
      />
      <Cards
        title="Популярное"
        query="movie/popular?language=ru&region=ISO 3166-2:RU"
      />
      <Cards
        title="Лучшие по рейтингу"
        query="movie/top_rated?language=ru&region=ISO 3166-2:RU"
      />
    </section>
  );
}
