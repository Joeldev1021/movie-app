import { useEffect, useState } from "react";

const API_KEY = "a2c9fa3d617be0f40ce052f64d349eb4";

const urlSearchTv = {
  0: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&`,
  1: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&`,
  2: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&`,
  3: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
};

export const useFetchTv = ({ tvUrl, page }) => {
  const [tv, setTv] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then((res) => setTv(res.results))
      .finally(() => setIsLoading(false))
      .catch(() => setIsError(true));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tvUrl]);

  const getMovies = async () => {
    const res = await fetch(`${urlSearchTv[tvUrl]}page=${page}`);

    return res.json();
  };

  return { tv, isLoading, isError };
};
