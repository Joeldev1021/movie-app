
import Switch from "./Switch";
import React, { useState } from "react";
import Carousel from "./Carousel";
import SectionMovie from "./SectionMovie";
import Main from "./Main";

// const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const ShowMovies = () => {
  const [pathMovie, setPathMovie] = useState("popular");
  const [pathTvShow, setPathTvShow] = useState("popular");

  const handlePathMovies = (n) => {
    if (pathMovie === "popular") {
      setPathMovie("upcoming");
    } else {
      setPathMovie("popular");
    }
  };
  const handlePathTvShows = (n) => {
    if (pathTvShow === "popular") {
      setPathTvShow("top_rated");
    } else {
      setPathTvShow("popular");
    }
  };

  return (

    <div className="m-auto" style={{ width: "90%" }}>
      <Main />
      <Switch text={"Movies"} handlePathMovies={handlePathMovies} />
      <Carousel name="movie" path={pathMovie} />
      <SectionMovie />
      <Switch text={"Tv Show"} handlePathTvShows={handlePathTvShows}/>
      <Carousel name="tv" path={pathTvShow}/>
    </div>
  );
};

export default ShowMovies;
