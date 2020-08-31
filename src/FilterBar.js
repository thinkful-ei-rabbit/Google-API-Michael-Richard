import React from 'react';

class FilterBar extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor="print-type">Print Type:</label>
                <select>
                    <option value="test">Test</option>
                </select>
                <label htmlFor="book-type">Book Type:</label>
                <select>
                    <option value="test">Test</option>
                </select>
            </div>
        )
    }
}

export default FilterBar;