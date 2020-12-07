import React, { Component } from "react";
import AllMovies from "./components/Home.jsx";
import { Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails'


class App extends Component {
  render() {
    return (
      <div className="App">
        <AllMovies />
        <Route exact path='/movies/:Id' render={(props) => <MovieDetails {...props}}
      </div>
    );
  }
}

export default App;
