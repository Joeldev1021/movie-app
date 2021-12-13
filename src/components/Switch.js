import React, { useState } from "react";

const Switch = ({ text, handleMovies, handleTvShows }) => {
  const [btnSwitch, setBtnSwitch] = useState(false);

  const handleClick = (n) => {
    setBtnSwitch(n);
    if (text === "Movies") {
      handleMovies(btnSwitch ? 1 : 0);
    }
    if (text === "Tv Show") {
      handleTvShows(btnSwitch ? 1 : 0);
    }
  };

  return (
    <div className="d-flex flex-row">
      <p className="m-3 inline-block font-bold">{text}</p>
      <button
      type="button"
      className={btnSwitch ? "px-5" : "btn text-white px-5 rounded-full"}
      onClick={() => handleClick(!btnSwitch)}
      >Popular {text}</button>
      <button
        type="button"
        onClick={() => handleClick(!btnSwitch)}
        style={{ opacity: 1, transition: "all 0.3s ease-in-out", marginRight: "10px" }}
        className={btnSwitch ? "btn px-5 text-white rounded-full" : "px-5"}
      >
        Top {text}
      </button>
    </div>
  );
};

export default Switch;
