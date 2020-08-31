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
  fetch(`${api_url}?q=flowers`).then(res => res.json()).then(json => {
    this.setState({items: json.items})
  })

  // set state.items to results
}



render() {
  console.log(this.state.items)
  return (
    <div className="App">
      <Header />
      <Form />
      <Booklist items={this.state.items}/>
    </div>
  );
}
}

export default App;
