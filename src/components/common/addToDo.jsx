import React, { Component } from "react";
import ModalToDo from "./modalToDo";

class AddToDo extends Component {
  state = {};
  render() {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return (
      <div className="row">
        <div className="col-sm-12" id="headertext">
          <div id="fullDate">
            <h3>Today</h3>
            <div>
              {date}/{month}/{year}
            </div>
          </div>
        </div>
        <ModalToDo />
      </div>
    );
  }
}

export default AddToDo;
