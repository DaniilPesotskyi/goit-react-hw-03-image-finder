import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
    onEscClick = e => {
        if (e.key === 'Escape') {
            // console.log(e.code);
            this.props.onToggle();
        }
    };

    onBackdropClick = e => {
        const backdrop = document.querySelector('[data-backdrop]');
        if (backdrop === e.target) {
            this.props.onToggle();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.onEscClick);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscClick);
    }

    render() {
        if (this.props.isOpen) {
            return (
                <div
                    className={css.Overlay}
                    onClick={this.onBackdropClick}
                    data-backdrop
                >
                    <div className={css.Modal}>
                        <img src={this.props.imageURL} alt="img" />
                    </div>
                </div>
            );
        }
    }
}

export default Modal;
