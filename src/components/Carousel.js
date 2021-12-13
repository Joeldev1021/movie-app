import React from "react";
import CardMovies from "./CardMovies";

// eslint-disable-next-line no-unused-vars
const arrS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Carousel = ({ card, isLoading }) => {
  return (
    <div className="carousel__shadow">
      <div className="flex flex-nowrap m-auto overflow-x-auto carousel">
        {card.map((m) => (
          <CardMovies movie={m} key={m.id} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
