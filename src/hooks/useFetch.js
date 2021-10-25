import { useEffect, useState } from "react"
const API_KEY="a2c9fa3d617be0f40ce052f64d349eb4"

export  const useFetch = ({url, page}) => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
   
    useEffect(() =>{
        setIsLoading(true)
        getMovies()
         .then((res) =>setMovies(res.results))
         .finally(() =>setIsLoading(false))
         .catch(() =>setIsError(true))
    },[page])

    const getMovies = async() => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
        
        return res.json()
    }

    return {movies, isLoading, isError}
}
