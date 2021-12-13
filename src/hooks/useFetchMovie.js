import { useEffect, useState } from "react";
const API_KEY = "a2c9fa3d617be0f40ce052f64d349eb4";

const urlSearchMovie = {
  0: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&`,
  1: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&`, // proximos extrenos
  2: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&`,
  3: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`// trending
};
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>> tendencias

export const useFetchMovie = ({ movieUrl, page }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then((res) => setMovies(res.results))
      .finally(() => setIsLoading(false))
      .catch(() => setIsError(true));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieUrl]);

  const getMovies = async () => {
    const res = await fetch(`${urlSearchMovie[movieUrl]}page=${page}`);

    return res.json();
  };

  return { movies, isLoading, isError };
};
