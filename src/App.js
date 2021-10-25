import React, { useEffect, useState } from "react"
import Movies from "./components/Movies"
import NavBar from "./components/NavBar"
import NavPages from "./components/NavPages"

//580489

//url_latest movie https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
//url_popular https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
//url_top_rated  https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1


const App = () => {
  
    return (
        <div >
            <NavBar/>
            <Movies/>
        </div>
    )
}

export default App
