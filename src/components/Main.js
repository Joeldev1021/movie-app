/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main () {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex  lg:justify-between flex-col">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-white">Search your favorite movies?</span>
          <span className="block text-white">Start your free .</span>
        </h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="mt-8 w-11/12 m-auto border-none overflow-hidden rounded-full bg-gray-50 flex justify-between items-center "
        >
          <div className="w-10/12 ">
            <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="Search movie, Tv show, trailler" className="w-full outline-none border-none px-8 text-gray-500 "/>
          </div>
          <button style={{ width: "100px", backgroundImage: "linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )" }} className="rounded-full  text-white p-2" type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
