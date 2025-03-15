"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useMount } from "react-use";

export const VPN = () => {
  const [open, setOpen] = useState(false);

  useMount(() => setOpen(!localStorage.getItem("vpn-notification")));

  const handlerClose = () => {
    localStorage.setItem("vpn-notification", "done");
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={handlerClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Уведомление</DialogTitle>
          <DialogDescription>
            Для корректной работы сайта необходимо использовать VPN. Это
            обеспечит стабильный доступ ко всем функциям без ограничений.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
