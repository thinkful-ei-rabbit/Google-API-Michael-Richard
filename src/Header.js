import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="header-black">Google Book Search</div>
        {this.props.loading && <h4>Loading...</h4>}
      </>
    );
  }
}
