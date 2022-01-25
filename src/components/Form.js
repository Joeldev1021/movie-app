import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="mt-8 w-11/12 m-auto border-none overflow-hidden rounded-full bg-gray-50 flex justify-between items-center "
    >
      <div className="w-10/12 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search movie, Tv show, trailler"
          className="w-full outline-none border-none px-8 text-gray-500 "
        />
      </div>
      <button
        style={{
          width: "100px",
          backgroundImage:
            "linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )"
        }}
        className="rounded-full  text-white p-2"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
