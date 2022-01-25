import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import SearchPage from "./pages/SearchPage";

const App = function () {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route exact path="/movie/:keyword" element={<Movie />} />
        <Route exact path="movies" element={<Movie />} />
        <Route exact path="/search/:keyword" element={<SearchPage />} />
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;
