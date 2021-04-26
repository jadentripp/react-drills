import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*"} />
      </div>
    );
  }
}

export default App;