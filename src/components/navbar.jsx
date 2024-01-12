import React, {Component} from "react";

export default class Navbar extends Component {
    render(){
        return <nav className="navbar nav">
            <div className="container">
                <span className="navbar-brand mb-1 h1">logo</span>
                <span>{this.props.totalItems}</span>
            </div>
            </nav>
    }
}

