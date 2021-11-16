import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ShowMovies from "../components/ShowMovies";

const Home = () => {
  
  return (
    <div>
      <ShowMovies />
      {/* is footer */}
      <Footer />
    </div>
  );
};

export default Home;
