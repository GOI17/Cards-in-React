import React, { Component } from "react";

class Navigation extends Component {
    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark">
                    <a href="" className="text-white">
                        {this.props.title}
                        <span className="badge badge-pill badge-light ml-2">
                            {this.props.todos}
                        </span>
                    </a>
                </nav>
            </div>
        )
    }
}

export default Navigation