import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";




class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <p>Welcome to your state management version of Smurfs!</p>
        </div>
        <SmurfList />
      </div>
    );
  }
}

export default App;