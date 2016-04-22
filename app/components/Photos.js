import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Photos.css';

import Progress from './Progress';
const DISLIKE = 37;
const SUPERLIKE = 38;
const LIKE = 39;

class Photos extends Component {
    static propTypes = {
        files: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.addFiles(this.props.folder);
        document.addEventListener('keydown', this.keyPress.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyPress);
    }

    keyPress(e) {
        var key = e.which;
        var {
            files,
            navigation
        } = this.props;
        var file = files[navigation - 1];

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
        console.log(this.props);

        if (navigation > files.length) {
            return (
                <div>
                    <Link to="/">Start Over</Link>

                    <h2>Smashed it!</h2>
                </div>
            );
        }

        return (
            <div>
                <Link to="/">Start Over</Link>

                <Progress current={this.props.navigation} total={files.length} />

                <div className={styles['img-container']}>
                    <img className={styles.img} src={files[navigation - 1]} />
                </div>
            </div>
        );
    }
}

export default Photos;
