import React, { Component } from 'react';
import styles from './Progress.css';

export default class Progress extends Component {
    render() {
        const {
            total,
            current
        } = this.props;

        return (
            <div className={styles.tac}>
                {total === 0 && <h1>Oop's no supported files were found :(</h1>}
                {total > 0 && `${current}/${total}`}
            </div>
        );
    }
}
