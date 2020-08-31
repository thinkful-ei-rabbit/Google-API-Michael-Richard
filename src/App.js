import React from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Booklist from './Booklist'


const api_key = 'AIzaSyD59rp_wXdLBXXfcUMN2xpEyALYsibCxeg';
const api_url = 'https://www.googleapis.com/books/v1/volumes';

class App extends React.Component {
  state = {
    items: [],

  }

componentDidMount() {
  // fetch
  // in form submit, change q: variable,

  fetch(`${api_url}?q=flowers`).then(res => res.json()).then(json => {
    this.setState({items: json.items})
  })

  // set state.items to results
}

// function that changes state based on a new fetch call and rerenders
// callback function, as a property of the form

handleSubmit = (e, val) => {
  e.preventDefault();
  console.log(val)
  fetch(`${api_url}?q=${val}`).then(res => res.json())
    .then(json => {
      this.setState({items: json.items})
    })
}


// filter functions


render() {
  return (
    <div className="App">
      <Header />
      <Form handleSubmit={this.handleSubmit}/>
      <Booklist items={this.state.items}/>
    </div>
  );
}
}

export default App;
