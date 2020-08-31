import React from 'react';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar.js';

class Form extends React.Component {
    render() {
        
        return (
            <div>
             <SearchBar handleSubmit={this.props.handleSubmit}/>
             <FilterBar />
            </div>
        )
    }
}

export default Form;