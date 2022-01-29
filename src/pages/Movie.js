/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardMovies from "../components/CardMovies";
import Loading from "../components/Loading";
import Options from "../components/Options";
import NavPages from "../components/NavPages";
import { getPathTrendig } from "../utils";
import { useFetch } from "../hooks/useFetch";
import { filterMovie, filterMovieDate, filterMovieType } from "../helper/filterMovie";

const Movies = () => {
  const { keyword } = useParams();
  const [page, setPage] = useState(1);
  const [date, setDate] = useState("day");
  const [type, setType] = useState("all");

  let url;
  if (keyword === "trending") {
    url = getPathTrendig({ type, date, page });
  }

  const handleButton = (resType, resDate) => {
    if (resType) setType(resType);
    if (resDate) setDate(resDate);
  };

  const { result, isLoading } = useFetch({ url });

  return (
    <div className="container-movie pt-16">
      <aside className="pt-10 pl-5">
        <div className="fixed">
          <p className="text-2xl font-bold">Trending Movie</p>
          <Options handleButton={handleButton} />
        </div>
      </aside>
      <div className=" flex justify-center flex-col">
          {isLoading
            ? <Loading />
            : (
              <div className="container-grid justify-items-center mt-5">
                {
                  result.map((m) => <CardMovies key={m.id} movie={m} />)
                }
                </div>
              )
            }
        <NavPages page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Movies;
