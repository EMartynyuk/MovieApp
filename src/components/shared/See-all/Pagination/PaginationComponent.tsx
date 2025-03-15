"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import styles from "./Pagination.module.scss";
import { useSearchParams } from "next/navigation";

interface IPaginationComponent {
  page: number;
  totalPages: number;
}

export const PaginationComponent = ({
  page,
  totalPages,
}: IPaginationComponent) => {
  const params = useSearchParams();
  const initQuery = params.get("type");

  let prevLink;
  let nextLink;

  if (initQuery && !initQuery.includes("page=")) {
    prevLink = initQuery + "&page=" + Math.max(1, page - 1);
    nextLink = initQuery + "&page=" + Math.min(totalPages, page + 1);
  } else {
    prevLink = initQuery?.replace(/page=\d+/, `page=${Math.max(1, page - 1)}`);
    nextLink = initQuery?.replace(
      /page=\d+/,
      `page=${Math.min(totalPages, page + 1)}`
    );
  }

  return (
    <Pagination className={styles.pagination}>
      <PaginationContent>
        <PaginationItem className={styles.paginationItem}>
          <PaginationPrevious
            className={styles.paginationArrow}
            href={{
              pathname: "/see-all",
              query: {
                type: prevLink,
              },
            }}
          />
        </PaginationItem>
        <PaginationItem className={styles.paginationItem}>
          <PaginationLink
            href={{ pathname: "/see-all", query: { type: initQuery } }}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
        {page !== totalPages && (
          <PaginationItem className={styles.paginationItem}>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem className={styles.paginationItem}>
          <PaginationNext
            className={styles.paginationArrow}
            href={{
              pathname: "/see-all",
              query: {
                type: nextLink,
              },
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
