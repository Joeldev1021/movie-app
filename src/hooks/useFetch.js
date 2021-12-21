/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovies()
      .then((res) => setResult(res.results))
      .finally(() => setIsLoading(false))
      .catch(() => setIsError(true));
  }, [url]);

  const getMovies = async () => {
    const res = await fetch(url);

    return res.json();
  };
  console.log(result);

  return { result, isLoading, isError };
};
