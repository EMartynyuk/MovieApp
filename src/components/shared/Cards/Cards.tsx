"use client";

import type { ICard, ICards } from "./types";
import { useFetchCards } from "@/hooks/useFetchCards";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "..";

export const Cards = ({ title, query, hiddenMore }: ICards) => {
  const { data, isLoading, error } = useFetchCards(query);

  let items;
  if (isLoading) {
    return (
      <div className="films">
        <div className="films__top">
          <Skeleton className="skeleton-main skeleton__cards-title" />
          <Skeleton className="skeleton-main skeleton__cards-more" />
        </div>

        <Skeleton className="skeleton-main skeleton__cards" />
      </div>
    );
  }

  if (error) {
    return <p className="error">Ошибка</p>;
  }

  if (title === "Фильмы" || title === "Сериалы") {
    items = data.cast;
  } else {
    items = data.results;
  }

  if (!items?.length) {
    return null;
  }

  return (
    <div className="films">
      <div className="films__top">
        <h2 className="films__title">{title}</h2>
        {!hiddenMore && data.page && (
          <Link
            className="films__more"
            href={{ pathname: "/see-all", query: { type: query } }}
          >
            Смотреть все
          </Link>
        )}
      </div>
      <ScrollArea type="always">
        <ul className="films__items">
          {items.map((film: ICard, index: number) => (
            <Card {...film} key={index} />
          ))}
        </ul>
        <ScrollBar orientation="horizontal" className="scrollbar" />
      </ScrollArea>
    </div>
  );
};
