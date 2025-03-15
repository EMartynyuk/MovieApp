"use client";

import { createURL } from "@/utils/createURL";
import { useState } from "react";
import { ModalPopup } from "..";

export interface IRequestTrailers {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

interface ITrailer {
  backdrop_path: string;
  dataTrailer: IRequestTrailers[];
}

export const Trailer = ({ backdrop_path, dataTrailer }: ITrailer) => {
  const hasTrailers = dataTrailer.length > 0;
  const [open, setOpen] = useState(false);

  const handlerOpenModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className="trailer"
      style={{ backgroundImage: createURL(backdrop_path) }}
    >
      {hasTrailers && (
        <>
          <div className="trailer__content">
            <button className="trailer__play" onClick={handlerOpenModal}>
              <svg className="trailer__play-svg">
                <use xlinkHref={"/img/sprite.svg" + "#play"}></use>
              </svg>
            </button>
            <p className="trailer__text">Смотреть трейлер</p>
          </div>

          <ModalPopup
            open={open}
            showModal={handlerOpenModal}
            data={dataTrailer}
          />
        </>
      )}
    </div>
  );
};
