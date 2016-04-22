import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Photos.css';

import Progress from './Progress';

class Photos extends Component {
    static propTypes = {
        files: PropTypes.array.isRequired
    };

    componentWillMount() {
        this.props.addFiles(this.props.folder);
    }

    render() {
        const { files } = this.props;

        return (
            <div>
                <Link to="/">Start Over</Link>

                <Progress current={1} total={files.length} />

                <div className={styles['img-container']}>
                    <img className={styles.img} src={files[0]} />
                </div>
            </div>
        );
    }
}

export default Photos;
