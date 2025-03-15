import { GridCards } from "@/components/shared";
import { Suspense } from "react";

export default function PageSeeAll() {
  return (
    <Suspense>
      <GridCards />
    </Suspense>
  );
}
