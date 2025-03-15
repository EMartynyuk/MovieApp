import { getData } from "@/utils/getData";
import { useQuery } from "@tanstack/react-query";

export const useFetchPerson = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["person", id],
    queryFn: () => getData(`person/${id}?language=ru`),
  });

  return { data, isLoading, error };
};
