import React from "react";

const Switch = () => {
  return (
    <div className="d-flex flex-row">
      <p className="m-3 inline-block">Popular Movies</p>
      <button
        type="button"
        className="bg-gray-800 text-white px-3 rounded-full"
      >
        Tv Show
      </button>
      <button>Movies</button>
    </div>
  );
};

export default Switch;
