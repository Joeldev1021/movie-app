import { useState } from "react";
import { useParams } from "react-router-dom";
import CardMovies from "../components/CardMovies";
import Loading from "../components/Loading";
import Options from "../components/Options";
import NavPages from "../components/NavPages";
import { getPathTrendig } from "../utils";
import { useFetch } from "../hooks/useFetch";

const Movies = () => {
  const { keyword } = useParams();
  const [page, setPage] = useState(1);
  console.log(page);
  let url;
  if (keyword === "trending") {
    url = getPathTrendig({ type: "movie", date: "day", page });
  }

  const { result, isLoading } = useFetch({ url });

  return (
    <div className="container-movie">
      <aside className="pt-10 pl-5">
        <div className="fixed">
          <p className="text-2xl font-bold">Trending Movie</p>
          <Options/>
        </div>
      </aside>
      <div className=" flex justify-center flex-col">
        <div className="container-grid justify-items-center mt-5">
          {isLoading
            ? <Loading />
            : result.map((m) => <CardMovies key={m.id} movie={m} />)}
        </div>
        <NavPages page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Movies;
