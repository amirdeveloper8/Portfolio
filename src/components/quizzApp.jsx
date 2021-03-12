import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuizzApp extends Component {
  state = {};
  render() {
    return (
      <div className="quizz-app">
        <h3 className="title-quizz">Quizz App</h3>
        <Link className="quizz-content" to="/quizz-app/content">
          <button className="btn btn-outline-light quizzapp-start-btn">
            شروع کن
          </button>
        </Link>
      </div>
    );
  }
}

export default QuizzApp;
