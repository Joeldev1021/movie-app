import Switch from "./Switch";
import React, { useState } from "react";

import CardMovies from "./CardMovies";
import NavPages from "./NavPages";
import Carousel from "./Carousel";
import SectionMovie from "./SectionMovie";
import { useFetchMovie } from "../hooks/useFetchMovie";
import Main from "./Main";
import { useFetchTv } from "../hooks/useFetchTv";

const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5ZmEzZDYxN2JlMGY0MGNlMDUyZjY0ZDM0OWViNCIsInN1YiI6IjYxMjNiMzFmYTgwMjM2MDA3M2MxZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3Zur0yhvy5LrvhFW7AaVUQz1KUTrsHbUoKZwNUaRfk";

const IMG_URL = `https://image.tmdb.org/t/p/w500/`;

const Movies = ({ url }) => {
  const [page, setPage] = useState(1);

  const { movies, isError, isLoading } = useFetchMovie({ url, page });
  const { tv } = useFetchTv({ url, page });

  const handlePage = (e) => {
    e.preventDefault();
    setPage(e.target.textContent);
  };

  return isLoading ? (
    <img
      style={{ width: "300px" }}
      className="m-auto mt-8"
      src="/loading.svg"
      alt="cargando"
    />
  ) : (
    <div className="m-auto" style={{ width: "90%" }}>
      <Main />
      <Switch text={"Popular Movie"} />
      <Carousel movies={movies} />
      <SectionMovie />
      <Switch text={"Popular Tv"} />
      <Carousel movies={tv} />
    </div>
  );
};

export default Movies;
