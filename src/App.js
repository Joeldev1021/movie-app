/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";

// eslint-disable-next-line no-unused-vars
import Login from "./pages/Login";

const App = function () {
  return (
    <div>
      <Home/>
    </div>
  );
};

export default App;

/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */
