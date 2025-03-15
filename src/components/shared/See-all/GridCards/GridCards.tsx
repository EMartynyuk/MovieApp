"use client";

import { useFetchCards } from "@/hooks/useFetchCards";
import { redirect, useSearchParams } from "next/navigation";
import styles from "./GridCards.module.scss";
import { Skeleton } from "@/components/ui/skeleton";
import type { ICard } from "../../Cards/types";
import { Card, PaginationComponent } from "../..";

export const GridCards = () => {
  const params = useSearchParams();
  const query = params.get("type");

  if (!query) {
    redirect("/");
  }

  const { data, isLoading, error } = useFetchCards(query);

  if (isLoading) {
    return <Skeleton className="skeleton-main skeleton__grid-cards" />;
  }

  if (error || data?.success === false) {
    redirect("/");
  }

  return (
    <>
      <ul className={styles.items}>
        {data.results.map((film: ICard, index: number) => (
          <Card {...film} key={index} />
        ))}
      </ul>
      <PaginationComponent page={data.page} totalPages={data.total_pages} />
    </>
  );
};
