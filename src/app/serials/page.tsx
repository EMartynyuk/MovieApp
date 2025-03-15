import { Cards } from "@/components/shared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Сериалы",
  description: "Каталог сериалов",
};

export default function PageSerials() {
  return (
    <section className="primary">
      <Cards title="В тренде за неделю" query="trending/tv/week?language=ru" />
      <Cards title="Популярное" query="tv/popular?language=ru" />
      <Cards title="Лучшие по рейтингу" query="tv/top_rated?language=ru" />
    </section>
  );
}
