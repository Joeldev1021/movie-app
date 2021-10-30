import React from 'react'

const IMG_URL = `https://image.tmdb.org/t/p/w500`;

const CardMovies = ({movie}) => {
    return (
        <div style={{width: '250px' }}className="border rounded-lg border-gray-400 m-auto overflow-hidden">
           <img className="" src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
           <div className="text-center">
             <p className="text-xl movie__title">{movie.title}</p>
             <p className="m-auto"><i style={{color: '#FCD34D'}} className="fas fa-star "></i> {movie.vote_average}/10</p>
           </div>   
        </div>
    )
}

export default CardMovies
