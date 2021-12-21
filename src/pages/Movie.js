import { useParams } from "react-router-dom";
// import CardMovies from "../components/CardMovies";
// import Loading from "../components/Loading";
import { useEffect } from "react";
import Options from "../components/Options";
import NavPages from "../components/NavPages";
import { getPathMovie } from "../utils";

const Movies = () => {
  const { keyword } = useParams();
  useEffect(() => {
    console.log(keyword);
  }, [keyword]);
  getPathMovie({ keyword });

  return (
    <div className="container-movie">
      <aside className="pt-10 pl-5">
        <div className="fixed">
          <p className="text-2xl font-bold">Popular Movie</p>
          <Options/>
        </div>
      </aside>
      <div className="container-grid flex justify-center flex-col">
        {/* <div className="grid grid-cols-5 justify-items-center mt-5">
          {isLoading
            ? <Loading />
            : movies.map((m) => <CardMovies key={m.id} movie={m} />)}
        </div> */}
        {/* <button style={{ width: "90%" }} className="bg-indigo-600 my-8 m-auto p-3 rounded-lg text-white font-bold">Show More</button> */}
        <NavPages />
      </div>
    </div>
  );
};

export default Movies;
