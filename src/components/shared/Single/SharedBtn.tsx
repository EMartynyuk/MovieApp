"use client";

import { useEffect, useRef } from "react";
import { useCopyToClipboard } from "react-use";
import { toast } from "sonner";

export const SharedBtn = () => {
  const pathname = useRef<string>(null);
  const [, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    pathname.current = window.location.href;
  }, []);

  return (
    <button
      className="information__controls-share"
      onClick={() => {
        if (pathname.current) {
          toast.success("Ссылка была скопирована!");
          copyToClipboard(pathname.current);
        } else {
          toast.error("Что-то пошло не так!");
        }
      }}
    >
      <svg className="information__controls-share-svg">
        <use xlinkHref={"/img/sprite.svg" + "#share"}></use>
      </svg>
    </button>
  );
};
