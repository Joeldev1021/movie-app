import React from "react";
import { IMG_URL } from "../utils";

const CardSearch = ({ movie }) => {
  return (
        <div style={{ width: "800px" }} className="flex my-4 border-2 m-auto rounded-lg overflow-hidden">
            <img style={{ width: "150px" }} src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
            <div className="p-4">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
  );
};

export default CardSearch;
