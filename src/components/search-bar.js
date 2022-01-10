import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", placeHolder: "Tapez un film..." };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8 my-5">
          <input
            className="form-control input-lg"
            type="text"
            onChange={this.handleChange.bind(this)}
            placeholder={this.state.placeHolder}
          />
        </div>
      </div>
    );
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ searchText: event.target.value });
  }
}

export { SearchBar };
