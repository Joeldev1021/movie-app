/* eslint-disable no-unused-vars */
import Switch from "./Switch";
import React, { useState } from "react";
import Carousel from "./Carousel";
import SectionMovie from "./SectionMovie";
import { useFetchMovie } from "../hooks/useFetchMovie";
import Main from "./Main";
import { useFetchTv } from "../hooks/useFetchTv";
import Loading from "./Loading";

// eslint-disable-next-line no-unused-vars
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5ZmEzZDYxN2JlMGY0MGNlMDUyZjY0ZDM0OWViNCIsInN1YiI6IjYxMjNiMzFmYTgwMjM2MDA3M2MxZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3Zur0yhvy5LrvhFW7AaVUQz1KUTrsHbUoKZwNUaRfk";
// eslint-disable-next-line no-unused-vars
const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const ShowMovies = () => {
  const [moviePage, setMoviePage] = useState(1);
  const [tvPage, setTvPage] = useState(1);
  const [movieUrl, setMovieUrl] = useState(1);
  const [tvUrl, setTvUrl] = useState(1);

  const { movies, isLoading } = useFetchMovie({ movieUrl, moviePage });
  const { tv } = useFetchTv({ tvUrl, tvPage });

  const handleMovies = (n) => {
    setMovieUrl(n);
  };

  const handleTvShows = (n) => {
    setTvUrl(n);
  };

  return (

    <div className="m-auto" style={{ width: "90%" }}>
      <Main />
      <Switch text={"Movies"} handleMovies={handleMovies} />
      <Carousel card={movies} isLoading={isLoading} />
      <SectionMovie />
      <Switch text={"Tv Show"} handleTvShows={handleTvShows}/>
      <Carousel card={tv} />
    </div>
  );
};

export default ShowMovies;
