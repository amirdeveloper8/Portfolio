import React, { Component } from "react";
import ToDoForm from "./toDoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

class ToDo extends Component {
  state = {
    edit: { id: null, value: "" },
  };

  submitUpdate = (value) => {
    this.props.updateTodo(this.state.edit.id, value);
    const { edit } = this.state;
    edit.value = value;
    this.setState({ edit });
    console.log(edit);
  };

  render() {
    const { todos, completeTodo, removeTodo } = this.props;

    const { edit } = this.state;

    if (edit.id) {
      return <ToDoForm edit={edit} onSubmit={this.submitUpdate} />;
    }
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
            style={{ cursor: "pointer" }}
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
          <TiEdit
            style={{ cursor: "pointer" }}
            onClick={() =>
              this.setState(
                Object.assign(this.state.edit, {
                  id: todo.id,
                  value: todo.text,
                })
              )
            }
            className="edit-icon"
          />
        </div>
      </div>
    ));
  }
}

export default ToDo;
