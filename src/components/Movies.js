import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import CardMovies from "./CardMovies";
import NavPages from "./NavPages";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5ZmEzZDYxN2JlMGY0MGNlMDUyZjY0ZDM0OWViNCIsInN1YiI6IjYxMjNiMzFmYTgwMjM2MDA3M2MxZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3Zur0yhvy5LrvhFW7AaVUQz1KUTrsHbUoKZwNUaRfk";

const IMG_URL = `https://image.tmdb.org/t/p/w500/`;

const Movies = ({url}) => {
  const [page, setPage] = useState(1);
  
  const { movies, isError, isLoading } = useFetch({url, page });

  const handlePage = (e) => {
    e.preventDefault();
    setPage(e.target.textContent);
  };

  return isLoading ? (
    <img style={{width:'300px'}} className="m-auto mt-8" src="/loading.svg" alt="cargando" />
  ) : (
    <>
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-auto mt-8" style={{ width: "90%" }}>
        {movies.map((m) => (
          <CardMovies movie={m} key={m.id} />
        ))}
      </div>
      <NavPages handlePage={handlePage} page={page} />
    </>
  );
};

export default Movies;
