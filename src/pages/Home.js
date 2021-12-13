/* eslint-disable no-unused-vars */
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ShowMovies from "../components/ShowMovies";

const Home = () => {
  return (
    <div>
      <NavBar />
      <ShowMovies />
      <Footer />
    </div>
  );
};

export default Home;
