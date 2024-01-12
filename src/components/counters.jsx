import React, {Component} from "react";
import Counter from "./counter";

export default class Counters extends Component{


    render() {
        return (
        <>
        {this.props.counters.map((counter) => (
            <Counter 
            key={counter.id}
            count={counter.value}
            onIncrement={() => this.props.onIncrement(counter)}
            onDecrement={() => this.props.onDecrement(counter)}
            onDelete={() => this.props.onDelete(counter)} />
        ))}
        </>
    )
    }
}
