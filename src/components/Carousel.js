/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { getPathMovie } from "../utils";
import CardMovies from "./CardMovies";

// eslint-disable-next-line no-unused-vars
const arrS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Carousel = ({ name, path }) => {
  const url = getPathMovie({ keyword: name, path, page: 1 });
  const { result } = useFetch({ url });

  return (
    <div className="carousel__shadow">
      <div className="flex flex-nowrap m-auto overflow-x-auto carousel">
        {result.map((m) => (
          <CardMovies movie={m} key={m.id} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
