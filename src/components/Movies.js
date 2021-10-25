import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import CardMovies from "./CardMovies";
import NavPages from "./NavPages";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5ZmEzZDYxN2JlMGY0MGNlMDUyZjY0ZDM0OWViNCIsInN1YiI6IjYxMjNiMzFmYTgwMjM2MDA3M2MxZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3Zur0yhvy5LrvhFW7AaVUQz1KUTrsHbUoKZwNUaRfk";

const IMG_URL = `https://image.tmdb.org/t/p/w500/`;


const Movies = () => {
  const [page, setPage] = useState(1)

  const { movies, isError, isLoading } = useFetch({page});

  const handlePage = (e) => {
      e.preventDefault();
      setPage(e.target.textContent) 
  }

  return isLoading ? (
    <img className="w-1/2 m-auto" src="/loading.svg" alt="cargando" />
  ) : (
    <>
    <div className="flex flex-wrap m-auto" style={{ width: "90%" }}>
      {movies.map((m) => (
        <CardMovies movie={m} key={m.id} />
      ))}
    </div>
    <NavPages handlePage={handlePage}/>
    </>
  );
};

export default Movies;
