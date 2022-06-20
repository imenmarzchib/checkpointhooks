
import React, { useState } from 'react'
import { Button} from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

function MovieCard({movie}) {
  const [stars, setStars] = useState(movie.rating);
  var example = {
    size: 40,
    edit: false,
    value: stars,
    onChange: (newValue) => {
      setStars(newValue);
    }
  };
  return (
    <div className='card'>
        <img src={movie.posterurl }/>
        <h3>{movie.name}</h3>
        <p>{movie.description}</p>
        <Button className='bnt' variant="primary">
        <ReactStars
            classNames="ratiing"
            count={5}
            value={movie.rating}
            size={24}
            activeColor="#ffd700"
            edit={false}
          /></Button>
    
    </div>
  )
}

export default MovieCard