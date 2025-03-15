import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";

interface IAdditionalOpt {
  children: ReactNode;
}

export const AdditionalOpt = ({ children }: IAdditionalOpt) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        style={{ width: "var(--radix-popper-anchor-width)" }}
        sideOffset={5}
      >
        <DropdownMenuItem>Пока не придумал</DropdownMenuItem>
        <DropdownMenuItem>Какое то полезное действие</DropdownMenuItem>
        <DropdownMenuItem>Очень полезное действие</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
