import React, { Component } from "react"

class TodoForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            responsable: '',
            description: '',
            priority: 'low'
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        this.props.onAddTodo(this.state)
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" onChange={this.handleInput} placeholder="Title" name="title" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.handleInput} placeholder="Responsable" name="responsable" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.handleInput} placeholder="Description" name="description" className="form-control" />
                    </div>
                    <div className="form-group">
                        <select name="priority" onChange={this.handleInput} className="form-control">
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default TodoForm