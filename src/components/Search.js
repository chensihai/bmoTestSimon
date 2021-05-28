import React, { useState, setState, setData } from 'react';


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

    fetchBooksWithFetchAPI = (url) => {
        this.setState({ ...this.state, isFetching: true });
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({ Books: result.docs, isFetching: false })
            })
            .catch(e => {
                console.log(e);
                this.setState({ ...this.state, isFetching: false });
            });
        
    };
    
    async searchFetch(key){

        console.log(key);
        var fetchBooks = this.fetchBooksWithFetchAPI("http://openlibrary.org/search.json?q=" + key)
  

    }

    Book() {
        //this.state.Books.length
        return ("test");
    }
    render() {
        return (<header className="App-header">
            Please type keywords to search your favoriate book
            <input value={this.state.inputValue} onChange={this.handleChange} onBlur={() => this.searchFetch(this.state.inputValue)} className="search_field" />
        </header>
        );

    }

}

export default Search
