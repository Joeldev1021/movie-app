import React from 'react'

const IMG_URL = `https://image.tmdb.org/t/p/w500`;

const CardMovies = ({movie}) => {
    console.log(movie)
    return (
        <div style={{width: '300px', }}className="border-solid border-4 border-light-blue-500 m-auto">
           <p>{movie.title}</p>
           <img className="" src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
        </div>
    )
}

export default CardMovies
