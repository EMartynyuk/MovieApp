import { getData } from "@/utils/getData";
import { useQuery } from "@tanstack/react-query";

export const useFetchCards = (path: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cards", path],
    queryFn: () => getData(path),
  });

  return { data, isLoading, error };
};
