import { getData } from "@/utils/getData";
import { useQueries } from "@tanstack/react-query";

export const useFetchSingle = (id: string, type: string) => {
  const paths = [
    `${type}/${id}?language=ru`,
    `${type}/${id}/credits?language=ru`,
    `${type}/${id}/videos`,
  ];

  const results = useQueries({
    queries: paths.map((path) => ({
      queryKey: ["single", path],
      queryFn: () => getData(path),
    })),
  });

  return results;
};
