import React, { Component } from "react";
import Counter from "./components/counter";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
    <div>
      <Navbar />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      </div>
      )
  }
}

export default App;