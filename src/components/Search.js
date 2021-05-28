import React, { useState, setState } from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: null
        };
    }

    componentDidMount() {
        this.setState({ inputValue: this.props.inputValue });
    }
    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    searchFetch = (key) => {
        debugger;
        console.log(key);
    }
    render() {
        return (<header className="App-header">
            Please type keywords to search your favoriate book
            <input value={this.state.inputValue} onChange={this.handleChange} onBlur={() => this.searchFetch(this.state.inputValue)} className="search_field" />
        </header>);

    }

}

export default Search
