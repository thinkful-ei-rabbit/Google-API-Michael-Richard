import React from "react";
import "./Booklist.css";

class Booklist extends React.Component {
    state = {
        desc: false,
    }
    
  handleDesc = () => {
    this.setState({desc: !this.state.desc})
  }

  checkDesc = (el, elVol) => {
      if (this.state.desc) {
          return elVol.description
      } else if (el.searchText) {
          return el.searchText.textSnippet
      }
  }

  render() {
    const itemsArr = this.props.items.map((el, index) => {
      const elVol = el.volumeInfo;
      const salePrice = el.saleInfo.retailPrice
        ? `${el.saleInfo.retailPrice.amount}$`
        : "Either Free or Unavailable";
      return (
        <li key={index} className="list-item">
          <h2>{elVol.title}</h2>
          <div className="list-item-box">
            {elVol.imageLinks && <img src={elVol.imageLinks.thumbnail} alt="Placeholder" />}
            <div className="list-item-nested-box">
              Authors: {elVol.authors}
              <br />
              Price: {salePrice}<br />
              <br />
              <div><p>{this.checkDesc(el, elVol)}</p></div>
              <button onClick={() => this.handleDesc()}>More Info</button>
            </div>
          </div>
        </li>
      );
    });

    return <ul>{itemsArr}</ul>;
  }
}

export default Booklist;
