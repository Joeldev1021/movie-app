import React, { useEffect, useState } from "react"
import Movies from "./components/Movies"
import NavBar from "./components/NavBar"

//580489

//url_latest movie https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
//url_popular https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
//url_top_rated  https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1


const App = () => {
    const [urlSearch, setUrlSearch] = useState(1)

    const handleClick = (e,index, tv) =>{
        e.preventDefault()
        tv? index = index + 3: index
        setUrlSearch(index)
    }
  
    return (
        <div >
            <NavBar handleClick={handleClick}/>
            <Movies  url={urlSearch}/>
        </div>
    )
}

export default App
