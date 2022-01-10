import React, { Component } from "react";

const INTERVAL_BEFORE_MACHIN = 1000;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      placeHolder: "Tapez un film...",
      lockRequest: false,
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8 my-5 input-group">
          <input
            className="form-control input-lg"
            type="text"
            onChange={this.handleChange.bind(this)}
            placeholder={this.state.placeHolder}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-secondary"
              onClick={this.handleOnClick.bind(this)}
            >
              Click here
            </button>
          </span>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
    if (!this.state.lockRequest) {
      this.setState({ lockRequest: true });
      setTimeout(
        function () {
          this.search();
        }.bind(this),
        INTERVAL_BEFORE_MACHIN
      );
    }
  }

  handleOnClick(event) {
    this.search();
  }

  search() {
    this.props.callback(this.state.searchText);
    this.setState({ lockRequest: false });
  }
}

export { SearchBar };
