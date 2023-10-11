import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
    <div>
      <Navbar/>
      <div >
      <Counters />
      </div>
      </div>
      )
  }
}

export default App;