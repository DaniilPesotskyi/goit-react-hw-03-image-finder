// import css from './App.module.css';
import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    state = {
        searchQuery: '',
    };

    onSetSearchQuery = query => {
        this.setState({ searchQuery: query });
    };

    render() {
        return (
            <>
                <Searchbar onSubmit={this.onSetSearchQuery} />
                <div>{this.state.searchQuery}</div>
                <ToastContainer autoClose={2500}/>
            </>
        );
    }
}

export default App;
