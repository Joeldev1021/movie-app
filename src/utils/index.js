/* eslint-disable no-unused-vars */
const API_KEY = process.env.API_KEY;

export function getPathMovie ({ keyword, path, page }) {
  const url = `https://api.themoviedb.org/3/${keyword}/${path}?api_key=${API_KEY}&language=en-US&page=${page}`;

  console.log("url", url);
  return url;
};

export function getPathTrendig ({ type, date, page = 1 }) {
  const url = `https://api.themoviedb.org/3/trending/${type}/${date}?api_key=${API_KEY}&language=en-US&page=${page}`;
  return url;
}

// const urlSearchMovie = {
//     0: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&`,
//     1: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&`, // proximos extrenos
//     2: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&`,
//     3: // trending
//   };

// const urlSearchTv = {
//   0: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&`,
//   1: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&`,
//   2: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&`,
//   3: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
// };

// const urlSearch = {
//   trending: `https://api.themoviedb.org/3/${keyword}/${path}/all/day?api_key=${API_KEY}page=${page}`, // trending all: ;
//   // https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
//   popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&`,
//   1: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&`,
//   2: `https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&`,
//   3: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
// };
