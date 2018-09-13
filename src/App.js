import React, { Component } from "react";
import Enfant from "./enfant";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    setInterval(() => {
      console.log("Mise à jour random");
      this.setState({ value: Math.floor(Math.random() * 3 + 1) });
    }, 2000);
  }
  render() {
    return <Enfant value={this.state.value} />;
  }
}

export default App;
