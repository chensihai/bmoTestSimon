import React, { useState, setState, setData } from 'react';
import Modal from "./Modal";


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: null,
            show: false

        };
    }

    searchResult = () => {
        if (this.state.hasOwnProperty("Books")) {
            return (
                <div className="results-container">
                    { this.state.Books.map(result => {
                        if (result.isbn) {
                            if (result.isbn[0]) {
                                return (

                                    <a key={result.id} onClick={this.searchFetchDetail(result.isbn[0])} className="result-item">
                                        <h6 className="image-username">{result.title}</h6>
                                    </a>
                                )
                            } else return false;

                        } else return false;
                    })}

                </div>
            )
        }

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

    fetchBooksWithFetchDetailAPI = (url) => {
        this.setState({ ...this.state, isFetching: true });
        fetch(url)
            .then(response => response.json())
            .then(result => {
                this.setState({ BookDetail: result, isFetching: false })
            })
            .catch(e => {
                console.log(e);
                this.setState({ ...this.state, isFetching: false });
            });

    };

    async searchFetch(key) {

        console.log(key);
        this.fetchBooksWithFetchAPI("http://openlibrary.org/search.json?q=" + key);


    };

    async searchFetchDetail(key) {
        debugger;
        //console.log(key);
        //if(key>0)
        //this.fetchBooksWithFetchDetailAPI("http://openlibrary.org/api/volumes/brief/isbn/" + key);


    };


    render() {
        return (
            <div>
                <div className="App-header">
                    Please type keywords to search your favoriate book
                <input value={this.state.inputValue} onChange={this.handleChange} onBlur={() => this.searchFetch(this.state.inputValue)} className="search_field" />
                </div>
                <hr />
                <Modal show={this.state.show}>Message in Modal</Modal>
                {this.searchResult()}

            </div>
        )
    }

}

export default Search