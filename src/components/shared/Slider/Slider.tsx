"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchCards } from "@/hooks/useFetchCards";
import { createURL } from "@/utils/createURL";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Link from "next/link";
import type { ICard } from "../Cards/types";

export const Slider = () => {
  const { data, isLoading, error } = useFetchCards(
    "movie/popular?language=ru&region=ISO 3166-2:RU"
  );

  if (isLoading) {
    return <Skeleton className="skeleton-main skeleton__slider" />;
  }

  if (error) {
    return <p>Произошла ошибка</p>;
  }

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[Autoplay({ delay: 10000 }), Fade()]}
      className="slider"
    >
      <CarouselContent className="-ml-0 slider__single">
        {data.results
          .filter((el: ICard) => el.backdrop_path)
          .map((el: ICard) => (
            <CarouselItem
              key={el.id}
              className="pl-0 slider__single"
              style={{ backgroundImage: createURL(el.backdrop_path!) }}
            >
              <div className="slider__single-main">
                <p className="slider__single-main-title">
                  {el.name ?? el.title ?? ""}
                </p>
              </div>
              <Link href={`/films/${el.id}`} className="slider__single-link" />
            </CarouselItem>
          ))}
      </CarouselContent>

      <CarouselPrevious className="slider__single-prev" />
      <CarouselNext className="slider__single-next" />
    </Carousel>
  );
};
