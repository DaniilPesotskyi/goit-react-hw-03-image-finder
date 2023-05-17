import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';

class Searchbar extends Component {
    state = {
        searchQuery: '',
    };

    onInputChange = e => {
        this.setState({ searchQuery: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            toast.error('The search field is empty!');
            return;
        }

        this.props.onSubmit(this.state.searchQuery);
    };
    render() {
        return (
            <header className={css.pageHeader}>
                <form className={css.SearchForm} onSubmit={this.onFormSubmit}>
                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        onChange={this.onInputChange}
                        value={this.state.searchQuery}
                        placeholder="Search images and photos"
                    />

                    <button type="submit" className={css.SearchFormButton}>
                        <span>Search</span>
                    </button>
                </form>
            </header>
        );
    }
}

export default Searchbar;
