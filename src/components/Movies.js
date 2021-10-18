import React from "react";
import CardMovies from "./CardMovies";

const IMG_URL = `https://image.tmdb.org/t/p/w500/`;

const Movies = ({ movies }) => {
  
  return (
    <div className="flex flex-wrap m-auto" style={{width: '90%'}}>
      {movies.map((m) => (
          <CardMovies movie={m} key={m.id}/>
      ))}
    </div>
  );
};

export default Movies;
