import React, { Component } from "react";
import TodoForm from "./todo-form";
import logo from '../logo.svg';

import { todos } from '../todos.json'

class TodoList extends Component {

    constructor() {
        super()
        this.state = {
            todos
        }
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleRemoveTodo = this.handleRemoveTodo.bind(this)
    }

    handleAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    handleRemoveTodo(index) {
        this.setState({
            todos: this.state.todos.filter((e, i) => {
                return i !== index
            })
        });
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className="col-md-4" key={i} >
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{todo.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{todo.responsable}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.handleRemoveTodo.bind(this, i)}>Remove</button>
                        </div>
                    </div>
                </div >
            )
        })

        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-3">
                        <img src={logo} className="App-logo" alt="logo" />
                        <TodoForm onAddTodo={this.handleAddTodo} />
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {todos}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList