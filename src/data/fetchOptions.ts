export const fetchOptions = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
    Accept: "application/json",
  },
};
