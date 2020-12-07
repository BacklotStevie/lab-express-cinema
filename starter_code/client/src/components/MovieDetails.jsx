import axios from "axios";
import React, { useState, useEffect } from 'react';

let(movie, setMovie) = useState({})

useEffect(() => {
    axios.get(`http://localhost:5000/movies/${props.match.params.movieId}`)
        .then((res) => {
            console.log(res.data)
            setMovie(res.data)
        })
}, [])

return (
    <>
        <div className='movies'>
            <div>
                <img src={movie.image} style={{ width: '10 rem', height: '10 rem' }}</img>
            </div>
            <div>
                <h2>{movie.title}</h2>
                <h3>{movie.director}</h3>
                <h3>{movie.description}</h3>
            </div>
        </div>
    </>
)

export default MovieDetails