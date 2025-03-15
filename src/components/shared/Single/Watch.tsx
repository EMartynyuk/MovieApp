import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReactNode } from "react";

interface IWatch {
  children: ReactNode;
}

export const Watch = ({ children }: IWatch) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent
        side="bottom"
        style={{ width: "100%", height: "100%", background: "#191919" }}
      >
        <SheetHeader>
          <SheetTitle style={{ color: "#fff" }}>
            Здесь скоро можно будет смотреть фильмы
          </SheetTitle>
          <SheetDescription style={{ color: "#fff" }}>
            Или не очень скоро... :)
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
