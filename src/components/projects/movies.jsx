import React, { Component } from "react";
import { getMovies } from "../../services/fakemovieservices";
import Like from "../common/like";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 6,
    currentPage: 1,
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { pageSize, currentPage, movies: allMovies } = this.state;
    const count = allMovies.length;

    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <div style={{ padding: "50px 0" }} className="container">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie._id} className="col-xs-12 col-sm-6 col-md-4">
              <div
                className="Box-movies"
                style={{
                  backgroundImage: `url(
                    ${movie.imageUrl}
                  )`,
                }}
              >
                <h3>{movie.title}</h3>
                <p className="publishMovies">{movie.published}</p>
                <p className="imdbMovies">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  {movie.imdb}
                </p>
                <div className="likeMovie">
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movies;
