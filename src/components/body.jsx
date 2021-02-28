import React, { Component } from "react";

class Body extends Component {
  state = {
    projects: [
      "project1",
      "project2",
      "project3",
      "project4",
      "project5",
      "project6",
      "project7",
      "project8",
      "project9",
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.projects.map((project) => (
            <div key={project} className="col-xs-12 col-sm-6 col-md-4">
              <div className="Box-porto">
                <h3>{project}</h3>
                <p>content</p>
                <button className="btn btn-dark">See More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Body;
