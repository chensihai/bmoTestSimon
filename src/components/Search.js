import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<header className="App-header">
            Please type keywords to search your favoriate book
            <input type="text" name="search" className="search_field" />
        </header>);

    }

}

export default Search
