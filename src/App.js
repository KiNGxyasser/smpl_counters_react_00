import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {


  state = {
    counters: [
    { id: 0, value: 2},
    { id: 1, value: 6},
    { id: 2, value: 0},
    { id: 3, value: 10},
    { id: 4, value: 60},
],
};

handleIncrement = (counter) => {
  const counters = [...this.state.counters];
  const index = counters.findIndex((c) => c.id === counter.id);
  counters[index].value++;
  this.setState({ counters });
}

handleDecrement = (counter) => {
  const counters = [...this.state.counters];
  const index = this.state.counters.findIndex((c) => c.id === counter.id);
  counters[index].value--;
  this.setState({ counters });
}

handleDelete = (counter) => {
    //1st way
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    console.log(counters)
    this.setState({ counters });

    //2nd way 

    // const counters = [...this.state.counters];
    // const index = counters.findIndex((c) => c.id ==== counter.id);
    // counters.splice(index, 1);
    // this.setState({ counters});

}
  render() {
    return (
    <div>
      <Navbar totalItems={
        this.state.counters.filter((counter) => counter.value > 0).length
      } />
      <div >
        <main className="container">
      <Counters 
        counters={this.state.counters}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
      </main>
      </div>
      </div>
      )
  }
}

export default App;