import React, {Component} from "react";

class Counter extends Component{


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

        return this.props.count === 0
        ? (classes += "warning")
        : (classes += "primary");
    }

    render() {
        return (
                <div className="row align-items-center">
                    <div className="col">
                <span className={this.setBadgesClasses()}>{this.props.count === 0 ? "zero" : this.props.count}</span>
                <button className="btn btn-sm btn-secondary m-1" onClick={this.props.onDecrement} disabled={this.props.count === 0}>-</button>
                <button className="btn btn-sm btn-secondary m-1" onClick={this.props.onIncrement}>+</button>
                <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDelete}>DELETE</button>
                    </div>
                </div>
        );
    }
}

export default Counter;
