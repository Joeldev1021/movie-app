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
  console.log(movies);

  return isLoading ? (
    <img style={{width:'300px'}} className="m-auto mt-8" src="/loading.svg" alt="cargando" />
  ) : (
    <div className="m-auto mt-8" style={{ width: "90%" }}>
     <h1 className="m-3">Popular Movies</h1>
      <div  className="flex flex-nowrap m-auto  overflow-x-auto w-11/12" style={{ width: "100%" }}>
        {movies.map((m) => (
          <CardMovies movie={m} key={m.id} />
        ))}
      </div>
      <NavPages handlePage={handlePage} page={page} />
    </div>
  );
};

export default Movies;
