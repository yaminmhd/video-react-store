import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { getMovies } from "./services/fakeMovieService";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies()
    };
  }

  deleteMovie(id){
    const { movies } = this.state;
    const filteredMovies = movies.filter(movie => movie._id !== id);
    this.setState({
      movies: filteredMovies
    });
  }

  updateLikeStatus = (id) => {
    const {movies} = this.state
    const cloneMovies = [...movies];
    const index = cloneMovies.findIndex(movie => movie._id === id);
    cloneMovies[index].liked = !cloneMovies[index].liked;
    this.setState({
      movies: cloneMovies
    })
  }

  render() {
    const { movies } = this.state;
    const headers = (
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col" />
        </tr>
      </thead>
    );
    const checkMoviesLength =
      movies.length === 0
        ? `There are no movies in the database`
        : `Showing ${movies.length} movies in the database`;
    return (
      <div>
        <h3 className="m-2">{checkMoviesLength}</h3>
        <table className="table">
          {movies.length !== 0 ? headers : <thead></thead>}
          <tbody>
            {movies.map(movie => {
              return (
                <MovieItem
                  key={movie._id}
                  likeStatus = {movie.liked}
                  updateLikeStatus = {this.updateLikeStatus}
                  movie={movie}
                  deleteHandler={() => this.deleteMovie(movie._id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
