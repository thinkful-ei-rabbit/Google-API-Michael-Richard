import React from 'react';

class FilterBar extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="print-type">Filter by Print Type:</label>
                <select onChange={(e) => this.props.printTypeFunc(e)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="book-type"> OR Book Type:</label>
                <select onChange={(e) => this.props.filterFunc(e)}>
                    <option value="">All</option>
                    <option value="paid-ebooks">Paid E-Books</option>
                    <option value="free-ebooks">Free E-Books</option>
                </select>
            </div>
        )
    }
}

export default FilterBar;