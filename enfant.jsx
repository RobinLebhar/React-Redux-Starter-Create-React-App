import React, { Component } from "react";

class Enfant extends Component {
  state = { value: undefined, message: "Rien à afficher" };
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props.value, state.value);
    let message = "Rien à afficher";
    if (props.value === 3 && state.value === 3) {
      message = "Wao incroyable";
    }
    return {
      value: props.value,
      message
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      pourLeDidUpdate: "kdo"
    };
  }

  componentDidUpdate(prevProps, prevState, argsFromSnapShotBeforeUpdate) {
    console.log("componentDidUpdate", argsFromSnapShotBeforeUpdate);
  }
  render() {
    return this.state.message;
  }
}

export default Enfant;
