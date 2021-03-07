import React, { Component } from "react";
import ToDoForm from "./toDoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

class ToDo extends Component {
  state = {
    edit: [{ id: null, value: "" }],
  };

  render() {
    const { todos, completeTodo, removeTodo } = this.props;

    return todos.map((todo, index) => (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            onClick={() => this.setState({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    ));
  }
}

export default ToDo;
