import { useBookmarks } from "@/lib/store";
import { TControlBtn } from "./Controls";
import { ISingleData } from "./single.types";

interface IControlBtn extends TControlBtn {
  singleData: ISingleData;
}

export const ControlBtn = ({ slug, className, singleData }: IControlBtn) => {
  const currentCategoryBookmark = useBookmarks((state) => state[slug]);
  const removeSingle = useBookmarks((state) => state.removeSingle);
  const addSingle = useBookmarks((state) => state.addSingle);

  const handlerAddToBookmark = () => {
    if (currentCategoryBookmark.find((el) => el.id === singleData.id)) {
      removeSingle(singleData.id, slug);
    } else {
      addSingle(
        {
          title: singleData.name || singleData.title,
          id: singleData.id,
          typeSingle: singleData.first_air_date ? "serials" : "films",
          vote_average: singleData.vote_average,
          poster_path: singleData.poster_path,
        },
        slug
      );
    }
  };

  return (
    <button
      className={
        `information__controls-${className} ` +
        (currentCategoryBookmark.find((el) => el.id === singleData.id)
          ? `information__controls-${className}--active`
          : "")
      }
      onClick={handlerAddToBookmark}
    >
      <svg className={`information__controls-${className}-svg`}>
        <use xlinkHref={"/img/sprite.svg" + `#${className}`}></use>
      </svg>
    </button>
  );
};
