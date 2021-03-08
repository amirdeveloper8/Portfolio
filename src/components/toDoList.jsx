import React, { Component } from "react";
import ToDo from "./toDo";
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

  updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    this.setState({
      todos: (prev) =>
        prev.map((item) => (item.id === todoId ? newValue : item)),
    });

    console.log(this.state.todos);
  };

  removeTodo = (id) => {
    const removeArr = [...this.state.todos].filter((todo) => todo.id !== id);
    this.setState({ todos: removeArr });
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

  render() {
    return (
      <div className="container" id="toDoList">
        <h2>What's the Plan for Today ?</h2>
        <ToDoForm onSubmit={this.addTodo} />
        <ToDo
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          completeTodo={this.completeTodo}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default ToDoList;
