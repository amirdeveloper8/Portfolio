import React, { Component } from "react";
import joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakemovieservices";

class LoginForm extends Form {
  state = {
    data: { title: "", imageUrl: "", published: "", imdb: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _id: joi.string(),
    title: joi.string().required().label("Title"),
    imageUrl: joi.string().required().label("Genre"),
    published: joi
      .number()
      .required()
      .min(1900)
      .max(2021)
      .label("Number in Stock"),
    imdb: joi.number().required().min(0).max(10).label("Daily Rental Rate"),
  };

  componentDidMount() {
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      imageUrl: movie.imageUrl,
      published: movie.published,
      imdb: movie.imdb,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);

    this.props.history.push("/fav-movie");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("imageUrl", "imageUrl")}
          {this.renderInput("published", "Number in Stock", "number")}
          {this.renderInput("imdb", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
