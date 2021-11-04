import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardMovies from "./components/CardMovies";

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={ <About />} />
        <Route path="/hola" element={ <CardMovies />} />
        <Route  path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
