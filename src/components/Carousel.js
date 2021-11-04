import React from "react";
import CardMovies from "./CardMovies";

const Carousel = ({movies}) => {
  return (
    <div
      className="flex flex-nowrap m-auto overflow-x-auto  "
      
    >
      {movies.map((m) => (
        <CardMovies movie={m} key={m.id} />
      ))}
    </div>
  );
};

export default Carousel;
