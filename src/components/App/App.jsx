// import css from './App.module.css';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

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
                <ImageGallery query={this.state.searchQuery}/>
                <ToastContainer autoClose={2500}/>
            </>
        );
    }
}

export default App;
