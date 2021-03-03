import React, { Component } from "react";
import AddToDo from "./common/addToDo";

class ToDoList extends Component {
  state = {};
  render() {
    return (
      <div className="container" id="toDoList">
        <AddToDo />
      </div>
    );
  }
}

export default ToDoList;
