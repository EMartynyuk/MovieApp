"use client";

import { AdditionalOpt, ControlBtn, SharedBtn, Watch } from "..";
import { ISingleData } from "./single.types";

export type TControlBtn = {
  slug: "loved" | "favorites";
  className: "favorite" | "bookmark";
};

const controlsBtn: TControlBtn[] = [
  {
    slug: "loved",
    className: "favorite",
  },
  {
    slug: "favorites",
    className: "bookmark",
  },
];

interface IControls {
  singleData: ISingleData;
}

export const Controls = ({ singleData }: IControls) => {
  return (
    <div className="information__controls">
      <div className="information__controls-top">
        {controlsBtn.map((el, index) => (
          <ControlBtn key={index} singleData={singleData} {...el} />
        ))}
        <SharedBtn />
      </div>
      <div className="information__controls-panel">
        <Watch>
          <button className="information__controls-panel-btn">Смотреть</button>
        </Watch>
        <AdditionalOpt>
          <button className="information__controls-panel-btn information__controls-panel-btn--dark">
            Доп опции
          </button>
        </AdditionalOpt>
      </div>
    </div>
  );
};
