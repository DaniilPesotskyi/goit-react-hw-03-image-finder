import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {

    onEscClick = e => {
        if (e.key === 'Escape') {
            console.log(e.code)
            this.props.onToggle();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', e => this.onEscClick(e));
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', e => this.onEscClick(e));
    }
    
    render() {
        if (this.props.isOpen) {
            return (
                <div className={css.LoaderOverlay}>
                    <div className={css.Modal}>
                        <img src={this.props.imageURL} alt="img" />
                    </div>
                </div>
            );
        }
    }
}

export default Modal;
