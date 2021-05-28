import React, { useState, setState, setData } from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: undefined,
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
                                    <a key={result.id} href="#" className="result-item" onClick={this.viewData(result.isbn[0])}>
                                        <h6 className="image-username">{result.title}</h6>
                                    </a>
                                );
                            } else return false;

                        } else return false;
                    })}

                </div>
            )
        }

    }
    viewData = (key) => {
        if(key>0&&this.state.show)
        window.open('http://openlibrary.org/api/volumes/brief/isbn/'+key+'.json', 'Data', 'height=250,width=250');
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

    async searchFetch(key) {

        console.log(key);
        this.fetchBooksWithFetchAPI("http://openlibrary.org/search.json?q=" + key)


    }




    render() {
        return (
            <div>
                <div className="App-header">
                    Please type keywords to search your favoriate book
                <input value={this.state.inputValue} onChange={this.handleChange} onBlur={() => this.searchFetch(this.state.inputValue)} className="search_field" />
                </div>
                <hr />
                {this.searchResult()}

            </div>
        )
    }

}

export default Search
