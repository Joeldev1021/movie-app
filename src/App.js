import React, { useEffect } from "react"
const API_KEY="a2c9fa3d617be0f40ce052f64d349eb4"
const TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmM5ZmEzZDYxN2JlMGY0MGNlMDUyZjY0ZDM0OWViNCIsInN1YiI6IjYxMjNiMzFmYTgwMjM2MDA3M2MxZjgwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S3Zur0yhvy5LrvhFW7AaVUQz1KUTrsHbUoKZwNUaRfk"


const App = () => {

   
    useEffect(() =>{
        getMovies()
         .then((res) =>console.log(res))
    },[])

    const getMovies = async() => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`)
        return res.json()
    }

    return (
        <div className="bg-black">
            <h1 className="text-white">hola con react config webpack</h1>
        </div>
    )
}

export default App
