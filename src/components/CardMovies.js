import React from 'react'

const IMG_URL = `https://image.tmdb.org/t/p/w500`;

const CardMovies = ({movie}) => {
    console.log(movie)
    return (
        <div style={{width: '300px' }}className="border-solid border-4 border-light-blue-500 m-auto">
           <img className="" src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
           <div >
           <p style={{width: '200px'}}className="text-xl ">{movie.title}</p>
             <p><i style={{color: '#FCD34D'}} class="fas fa-star "></i> {movie.vote_average}/10</p>
           </div>   
        </div>
    )
}

export default CardMovies
