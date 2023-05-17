import React, { Component } from 'react';
import css from './Loader.module.css';

class Loader extends Component {

    

    render() {
        if (this.props.isOpen) {
            return (
                <div className={css.Overlay}>
                    <div className={css.Loader}>
                        LOAD
                    </div>
                </div>
            );
        }
    }
}

export default Loader;