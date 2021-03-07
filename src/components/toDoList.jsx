import React, { Component } from "react";
import Todo from "./toDo";
import ToDoForm from "./toDoForm";

class ToDoList extends Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...this.state.todos];
    this.setState({ todos: newTodo });
  };

  completeTodo = (id) => {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  removeTodo = (id) => {
    const removeArr = [...this.state.todos].filter((todo) => todo.id !== id);
    this.setState({ todos: removeArr });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="container" id="toDoList">
        <h2>What's the Plan for Today ?</h2>
        <ToDoForm onSubmit={this.addTodo} />
        <Todo
          todos={todos}
          completeTodo={this.completeTodo}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default ToDoList;
