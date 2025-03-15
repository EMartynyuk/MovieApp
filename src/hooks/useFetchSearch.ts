import { getData } from "@/utils/getData";
import { useQuery } from "@tanstack/react-query";

export const useFetchSearch = (query: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["search", query],
    queryFn: () =>
      getData(`search/multi?include_adult=true&language=ru&query=${query}`),
    enabled: query !== "",
  });

  return { data, isLoading, error };
};
