import React, { Component, PropTypes } from 'react';
import styles from './Photos.css';

import Header from './Header';
const DISLIKE = 37;
const SUPERLIKE = 38;
const LIKE = 39;

class Photos extends Component {
    static propTypes = {
        files: PropTypes.array.isRequired
    };

    static keyPressBound = false;

    componentDidMount() {
        this.props.addFiles(this.props.folder);
        this.keyPressBound = this.keyPress.bind(this);
        document.addEventListener('keydown', this.keyPressBound);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyPressBound);
    }

    keyPress(e) {
        const key = e.which;
        const {
            files,
            navigation
        } = this.props;
        const file = files[navigation - 1];

        if (navigation > files.length) {
            return;
        }

        if (key === DISLIKE) {
            this.props.dislikeFile(file);
        }

        if (key === LIKE) {
            this.props.likeFile(file);
        }

        if (key === SUPERLIKE) {
            this.props.superlikeFile(file);
        }

        if (key === DISLIKE || key === LIKE || key === SUPERLIKE) {
            this.props.nextPhoto();
        }
    }

    render() {
        const { files, navigation } = this.props;

        if (navigation > files.length) {
            return (
                <div>
                    <Header current={navigation} total={files.length} />

                    <h2 className={styles.tac}>That's it!</h2>
                </div>
            );
        }

        return (
            <div>
                <Header current={navigation} total={files.length} />

                <div className={styles['img-container']}>
                    <div className={styles.img} style={{
                        backgroundImage: `url(${files[navigation - 1].path})`
                    }}></div>
                </div>
            </div>
        );
    }
}

export default Photos;
