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
    loading: false,
    error: null,
    filter: '',
    printType: '',

  }

// componentDidMount() {
//   // fetch
//   // in form submit, change q: variable,

//   fetch(`${api_url}?q=flowers`).then(res => res.json()).then(json => {
//     this.setState({items: json.items})
//   })

//   // set state.items to results
// }

// function that changes state based on a new fetch call and rerenders
// callback function, as a property of the form

handleSubmit = (e, val) => {
  e.preventDefault();
  console.log(this.state.filter, this.state.printType)
  this.setState({
    error: null,
    loading: true,
  })
  // console.log(val)
  fetch(`${api_url}?q=${val}${this.checkFilterType()}${this.checkPrintTypeInState()}&key=${api_key}`)
    .then(res => (res.ok) ? res.json() : '')
    .then(json => {
      this.setState({
        items: json.items,
        loading: false
      })
    }).catch(e => this.setState({error: e.message}))
}


// filter functions
handleFilter = (e) => {
  this.setState({filter: e.target.value});
}

handlePrintTypeFilter = (e) => {
  this.setState({printType: e.target.value})
}

checkFilterType = () => {
  return (this.state.filter !== '') ? `&filter=${this.state.filter}` : '';
}

checkPrintTypeInState = () => {
  return (this.state.printType !== '') ? `&printType=${this.state.printType}` : '';
}


render() {
  return (
    <div className="App">  
      <Header />
      <Form handleSubmit={this.handleSubmit} printTypeFunc={this.handlePrintTypeFilter} filterFunc={this.handleFilter}/>
      {(this.state.error) && <div>Error: Something went Wrong! {this.state.error}</div>}
      {(this.state.loading) ? <div>Loading...</div> : (this.state.items !== undefined) ? <Booklist items={this.state.items} /> : <div>0 Results Found</div>}
    </div>
  );
}
}

export default App;
