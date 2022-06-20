import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies,text,rate}) {
  return (
    <div className='box'>
        
        {movies.filter((el)=>el.name.toUpperCase().includes(text.toUpperCase())&& el.rating>=rate)
        .map((el)=><MovieCard  movie={el}  />
          )
          
            }
    </div> 
  )
}

export default MovieList