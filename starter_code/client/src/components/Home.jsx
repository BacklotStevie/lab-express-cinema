import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// export default class Home extends Component {
//   async callMyBackend() {
//     // this is an example call to our backend
//     let responseFromBackend = await axios.get("http://localhost:5000/");
//     console.log(responseFromBackend);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.callMyBackend}>Test Backend Call</button>
//         <h1>Welcome to Express Cinema</h1>
//       </div>
//     );
//   }
// }

const AllMovies = () => {
  let [movies, setMovies] = useState([])

  useEffect(() => {
    axious.get('http://localhost:5000/movies')
      .then((res) => {
        console.log(res.data)
        setMovies(res.data)
      })
  }, [])

  const ShowMovies = () => {
    return movies.map(movie => {
      return (
        <div className='movies'>
          <div>
            <img src={movie.image} style={{ width: '10 rem', height: '10rem' }}></img>
          </div>
          <div>
            <h2>{movie.title}</h2>
            <h3>{movie.director}</h3>
            <p>{movie.description}</p>
            <Link to={`/movies/${movie._id}`}>Movie Details</Link>
          </div>
        </div>
      )
    })
  }
  return (
    <>
      <ShowMovies />
    </>
  );
}

export default AllMovies;
