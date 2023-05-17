import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
// import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    onModalToggle = () => {
        this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
    };

    closeModal = () => {
        this.setState({isModalOpen: false})
    }

    componentDidMount() {}

    render() {
        return (
            <li
                className={css.galleryItem}
                onClick={() => this.onModalToggle()}
            >
                <img
                    className={css.galleryItemImage}
                    src={this.props.imageURL}
                    alt="img"
                />
                {/* <Modal
                    imageURL={this.props.largeImageURL}
                    isOpen={this.state.isModalOpen}
                    onToggle={this.closeModal}
                /> */}
            </li>
        );
    }
}

export default ImageGalleryItem;
