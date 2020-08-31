import React from "react";

class FilterBar extends React.Component {
  handlePrintType = (e) => {
    this.props.handlePrint(e.target.value);
  };

  handleBookType = (e) => {
    this.props.handleFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="print-type">Print Type: </label>
        <select onChange={this.handlePrintType}>
          <option value="">View All</option>
          <option value="all">All</option>
          <option value="books">Book</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="book-type">Book Type: </label>
        <select onChange={this.handleBookType}>
          <option value="">No Filter</option>
          <option value="partial">Partial</option>
          <option value="full">Full</option>
          <option value="free-ebooks">Free-eBooks</option>
          <option value="paid-ebooks">Paid-eBooks</option>
          <option value="ebooks">eBooks</option>
        </select>
      </div>
    );
  }
}

export default FilterBar;
