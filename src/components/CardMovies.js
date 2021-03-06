import React from "react";
import { IMG_URL } from "../utils";

// eslint-disable-next-line no-unused-vars

const CardMovies = ({ movie }) => {
  return (
    <div className="border rounded-2xl  m-3 card">
      <div className="container__img">
        <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
      </div>

      <div className="text-center">
        <p className="text-xl movie__title">
          {movie.title ? movie.title : movie.name}
        </p>
        <p className="m-auto">
          <i style={{ color: "#FCD34D" }} className="fas fa-star "></i>{" "}
          {movie.vote_average}/10
        </p>
      </div>
    </div>
  );
};

export default CardMovies;
