import React from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Booklist from "./Booklist";

const api_url = "https://www.googleapis.com/books/v1/volumes";

class App extends React.Component {
  state = {
    items: [],
    printType: "",
    bookType: "",
    error: null,
    loading: false,
  };

  handleSubmit = (e, val) => {
    const book = this.ifBook();
    const print = this.ifPrint();
    e.preventDefault();
    fetch(`${api_url}?q=${val}${book}${print}`)
      .then((res) => {
        if (res.ok) {
          this.setState({
            loading: true,
            error: null,
          });
          return res.json();
        } else {
          return Promise.reject(`Something went haywire: ${res.status} ${res.message}`);
        }
      })
      .then((json) => {
        this.setState({ loading: false });
        console.log(json);
        if (json.totalItems === 0) {
          this.setState({ error: "Nothing Found" });
        } else {
          this.setState({ items: json.items });
        }
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  ifBook = () => {
    if (this.state.bookType === "") {
      return ``;
    } else {
      return `&filter=${this.state.bookType}`;
    }
  };

  ifPrint = () => {
    if (this.state.printType === "") {
      return ``;
    } else {
      return `&printType=${this.state.printType}`;
    }
  };

  handlePrint = (filterVal) => {
    this.setState({ printType: filterVal });
  };

  handleFilter = (filterVal) => {
    this.setState({ bookType: filterVal });
  };

  render() {
    return (
      <div className="App">
        <Header loading={this.state.loading} />
        {this.state.error && <h3>{this.state.error}</h3>}

        <Form
          handlePrint={this.handlePrint}
          handleFilter={this.handleFilter}
          handleSubmit={this.handleSubmit}
        />
        <Booklist items={this.state.items} />
      </div>
    );
  }
}

export default App;
