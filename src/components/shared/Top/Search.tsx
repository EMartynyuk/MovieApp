"use client";

import debounce from "lodash.debounce";

import { useFetchSearch } from "@/hooks/useFetchSearch";
import { ChangeEvent, useCallback, useState } from "react";
import { SearchResult } from "..";
import { toast } from "sonner";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [debounceInputValue, setDebounceInputValue] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { data, isLoading, error } = useFetchSearch(debounceInputValue);

  const handleVisibleResults = () => {
    setIsVisible(true);
  };

  const handleUnvisible = () => {
    setTimeout(() => setIsVisible(false), 100);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsWriting(true);
    lazyRequest(e.target.value);
  };

  const lazyRequest = useCallback(
    debounce((query: string) => {
      setDebounceInputValue(query);
      setIsWriting(false);
    }, 1000),
    []
  );

  if (error) {
    toast.error("Произошла ошибка! Перезагрузите страницу.");
  }

  return (
    <div className="search">
      <button className="search__btn" aria-label="Искать...">
        <svg className="search__btn-svg">
          <use xlinkHref={"/img/sprite.svg" + "#search"}></use>
        </svg>
      </button>

      <input
        className="search__input"
        type="text"
        placeholder="Введите название фильма, сериала..."
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleVisibleResults}
        onBlur={handleUnvisible}
        disabled={Boolean(error)}
      />

      {isVisible && data && (
        <SearchResult
          data={data.results}
          isLoading={isLoading}
          isError={error}
          inputValue={inputValue}
          isWriting={isWriting}
        />
      )}
    </div>
  );
};
