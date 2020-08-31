import React from "react";

class SearchBar extends React.Component {
  state = {
    q: "",
  };

  handleInputChange = (e) => {
    this.setState({ q: e.target.value });
  };

  render() {
    return (
      <fieldset>
        <legend>Search the Google Book API</legend>
        <form
          onSubmit={(event) => this.props.handleSubmit(event, this.state.q)}
        >
          <input
            id="searchbar-input"
            type="text"
            value={this.state.q}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Search</button>
        </form>
      </fieldset>
    );
  }
}

export default SearchBar;
