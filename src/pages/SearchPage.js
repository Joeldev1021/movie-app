import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../utils";

const SearchPage = () => {
  const { keyword } = useParams();
  const [result, setResult] = useState(null);
  console.log(keyword);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`)
      .then((res) => res.json())
      .then((data) => setResult(data.results));
  }, [keyword]);

  return (
    <div>
        <h1>Search Page</h1>
        {
            result && result.map((m) => {
              return (
                    <div key={m.id}>
                        <h1>{m.title}</h1>
                        <img src={`${IMG_URL}${m.poster_path}`} alt="cover" />
                        <p>{m.overview}</p>
                    </div>
              );
            })
        }
    </div>
  );
};

export default SearchPage;
