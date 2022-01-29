import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSearch from "../components/CardSearch";

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
    <div className="pt-16">
        <h1>Search Page</h1>
        {
            result && result.map((m) => <CardSearch key={m.id} movie={m}/>)
        }
    </div>
  );
};

export default SearchPage;
