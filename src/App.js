import React, { useEffect, useState } from "react"
import Movies from "./components/Movies"
import NavBar from "./components/NavBar"
import NavPages from "./components/NavPages"
const API_KEY="a2c9fa3d617be0f40ce052f64d349eb4"
const TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5ZmEzZDYxN2JlMGY0MGNlMDUyZjY0ZDM0OWViNCIsInN1YiI6IjYxMjNiMzFmYTgwMjM2MDA3M2MxZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3Zur0yhvy5LrvhFW7AaVUQz1KUTrsHbUoKZwNUaRfk"

//580489
const App = () => {
   const [movies, setMovies] = useState([])
   
    useEffect(() =>{
        getMovies()
         .then((res) =>setMovies(res.results))
    },[])

    const getMovies = async() => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
           
        return res.json()
    }


    return (
        <div >
            <NavBar/>
            <Movies movies={movies}/>
            <NavPages/>
        </div>
    )
}

export default App
