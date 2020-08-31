import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <fieldset>
                <legend>Search the Google Book API</legend>
                <form>
               <input id="searchbar-input" type="text" />
               <button type="submit">Search</button>
           </form>
        </fieldset>
        )
    }
}

export default SearchBar;