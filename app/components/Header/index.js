import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Header.css';

export default class Header extends Component {
    render() {
        const {
            total,
            current,
            children
        } = this.props;

        return (
            <div className={styles.header + ' cf'}>
                <div className={styles.left}><b>Phortr</b></div>
                <div className={styles.middle}>
                    <Link to="/">Start Over</Link>
                </div>
                <div className={styles.right}>
                    Progress: <span>{current <= total ? current : total}</span>/<span>{total}</span>
                </div>
            </div>
        );
    }
}
