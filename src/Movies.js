import React, { Component } from "react";
import MovieItem from "./MovieItem";
import { getMovies } from "./services/fakeMovieService";
import Pagination from "./Pagination";
import { paginate } from "./utils/paginate";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      pageSize: 4,
      currentPage: 1
    };
  }

  deleteMovie(id) {
    const { movies } = this.state;
    const filteredMovies = movies.filter(movie => movie._id !== id);
    this.setState({
      movies: filteredMovies
    });
  }

  updateLikeStatus = id => {
    const { movies } = this.state;
    const cloneMovies = [...movies];
    const index = cloneMovies.findIndex(movie => movie._id === id);
    cloneMovies[index].liked = !cloneMovies[index].liked;
    this.setState({
      movies: cloneMovies
    });
  };

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies: allMovies, pageSize, currentPage } = this.state;
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
      count === 0
        ? `There are no movies in the database`
        : `Showing ${count} movies in the database`;
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div>
        <h3 className="m-2">{checkMoviesLength}</h3>
        <table className="table">
          {movies.length !== 0 ? headers : <thead />}
          <tbody>
            {movies.map(movie => {
              return (
                <MovieItem
                  key={movie._id}
                  likeStatus={movie.liked}
                  updateLikeStatus={this.updateLikeStatus}
                  movie={movie}
                  deleteHandler={() => this.deleteMovie(movie._id)}
                />
              );
            })}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Movies;
