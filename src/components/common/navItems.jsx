import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavItems extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Portfolio
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/fav-movie">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/todolist">
              Todo List
            </NavLink>
            <NavLink className="nav-item nav-link" to="/quiz-app">
              Quiz App
            </NavLink>
            <NavLink className="nav-item nav-link" to="/recipe">
              Recipe
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavItems;
