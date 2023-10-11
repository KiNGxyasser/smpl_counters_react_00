import React, {Component} from "react";

class Counter extends Component{
    state = {
        count: this.props.count,
    };
    handleIncrement = () => {
        let count = this.state.count;
        count++;
        this.setState({count: count});
    }

    handleDecrement = () => {
        let count = this.state.count;
        count--;
        this.setState({count: count});
    }

    setBadgesClasses(){
        let classes = "text-align-center badge m-1 text-bg-";

        // 1st way

        // if (this.state.count === 0){
        //     classes += "warning"
        // } else {
        //     classes += "primary"
        // }
        // return classes;

        // 2nd way

        return this.state.count === 0
        ? (classes += "warning")
        : (classes += "primary");
    }

    render() {
        return (
                <div className="row align-items-center">
                    <div className="col">
                <span className={this.setBadgesClasses()}>{this.state.count === 0 ? "zero" : this.state.count}</span>
                <button className="btn btn-sm btn-secondary m-1" onClick={this.handleDecrement} disabled={this.state.count === 0}>-</button>
                <button className="btn btn-sm btn-secondary m-1" onClick={this.handleIncrement}>+</button>
                <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDelete}>DELETE</button>
                    </div>
                </div>
        );
    }
}

export default Counter;
