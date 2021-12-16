import { useParams } from "react-router-dom";
import CardMovies from "../components/CardMovies";
import Loading from "../components/Loading";
import { useFetchMovie } from "../hooks/useFetchMovie";
import { useEffect } from "react";
import Options from "../components/Options";

const Movies = () => {
  const { keyword } = useParams();
  useEffect(() => {
    console.log("keyword", keyword);
  }, [keyword]);

  const { isLoading, movies } = useFetchMovie({ movieUrl: 0, page: 1 });

  return (
    <div className="container-movie">
      <aside className="pt-10 pl-5">
        <div className="fixed">
          <p className="text-2xl font-bold">Popular Movie</p>
          <Options/>
        </div>
      </aside>
      <div className="container-grid flex justify-center flex-col">
        <div className="grid grid-cols-5 justify-items-center">
          {isLoading
            ? <Loading />
            : movies.map((m) => <CardMovies key={m.id} movie={m} />)}
        </div>
        <button style={{ width: "90%" }} className="bg-indigo-600 my-8 m-auto p-3 rounded-lg text-white font-bold">Show More</button>
      </div>
    </div>
  );
};

export default Movies;
