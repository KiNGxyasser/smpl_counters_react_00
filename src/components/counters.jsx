import React, {Component} from "react";
import Counter from "./counter";

export default class Counters extends Component{
    state = {
        counters: [
        { id: 0, value: 2},
        { id: 1, value: 6},
        { id: 2, value: 0},
        { id: 3, value: 10},
        { id: 4, value: 60},
    ],
    };

    handleDelete = (counter) => {
        //1st way
        const counters = this.state.counters.filter((c) => c.id != counter.id);
        this.setState({ counters });

        //2nd way 

        // const counters = [...this.state.counters];
        // const index = counters.findIndex((c) => c.id ==== counter.id);
        // counters.splice(index, 1);
        // this.setState({ counters});

    }

    render() {
        return (
        <>
        {this.state.counters.map((counter) => (
            <Counter key={counter.id} count={counter.value} onDelete={() => this.handleDelete(counter)} />
        ))}
        </>
    )
    }
}
