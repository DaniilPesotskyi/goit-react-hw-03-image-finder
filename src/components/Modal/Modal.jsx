import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                console.log(e.code)
                this.props.onToggle();
            }
        });
    }

    componentWillUnmount() {
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                this.props.onToggle();
            }
        });
    }
    
    render() {
        if (this.props.isOpen) {
            return (
                <div className={css.Overlay}>
                    <div className={css.Modal}>
                        <img src={this.props.imageURL} alt="img" />
                    </div>
                </div>
            );
        }
    }
}

export default Modal;
