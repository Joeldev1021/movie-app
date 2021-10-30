import { useEffect, useState } from "react"
const API_KEY="a2c9fa3d617be0f40ce052f64d349eb4"


const urlSearchMovie = {
  0: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&`,//proximos extrenos
  1: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&`,
  2: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&`
}


export  const useFetch = ({url, page}) => {
    console.log("url" , url)
    console.log("page" , page)
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
   
    useEffect(() =>{
        setIsLoading(true)
        getMovies()
         .then((res) =>setMovies(res.results))
         .finally(() =>setIsLoading(false))
         .catch(() =>setIsError(true))
    },[page, url])

    const getMovies = async() => {
        const res = await fetch(`${urlSearchMovie[url]}page=${page}`)
        
        return res.json()
    }

    return {movies, isLoading, isError}
}
