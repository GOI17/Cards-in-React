import React, { Component } from 'react';
import Navigation from "./components/navigation";
import TodoList from "./components/todo-list";

import './App.css';

import { todos } from './todos.json'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: todos.length
    }
  }

  handleUpdateTodo(length) {
    if (length < this.state.todos)
      this.setState({
        todos: this.state.todos++
      })
    else
      this.setState({
        todos: this.state.todos--
      })
  }

  render() {
    return (
      <div className="App">
        <Navigation title="Tasks" todos={this.state.todos} />
        <TodoList></TodoList>
      </div>
    )
  }
}

export default App;
