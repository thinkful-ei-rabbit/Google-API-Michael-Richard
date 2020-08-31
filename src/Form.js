import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar.js';

class Form extends React.Component {
    render() {
        return (
            <div>
             <SearchBar />
             <FilterBar />
            </div>
        )
    }
}

export default Form;