import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type Single = {
  title: string;
  id: number;
  typeSingle: string;
  vote_average: number;
  poster_path: string;
};

interface TUseBookmarks {
  favorites: Single[] | [];
  loved: Single[] | [];

  addSingle: (newElement: Single, type: "favorites" | "loved") => void;
  removeSingle: (id: number, type: "favorites" | "loved") => void;
}

export const useBookmarks = create<TUseBookmarks>()(
  devtools(
    persist(
      (set) => ({
        favorites: [],
        loved: [],
        addSingle: (newElement, type) =>
          set((state) => ({ [type]: [...state[type], newElement] })),
        removeSingle: (id, type) =>
          set((state) => ({
            [type]: state[type].filter((el) => el.id !== Number(id)),
          })),
      }),
      { name: "storage-bookmarks" }
    )
  )
);
