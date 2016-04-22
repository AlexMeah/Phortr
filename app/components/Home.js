import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
const dialog = require('electron').remote.dialog;

export default class Home extends Component {
    chooseFolder() {
        this.props.chooseFolder(dialog.showOpenDialog({ properties: ['openDirectory'] }));
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <h2>Please select a folder</h2>

                    <button onClick={this.chooseFolder.bind(this)}>Choose Folder</button>

                    {
                        this.props.folder &&
                        <Link styles={styles.btn} to="/photos">Start Sorting</Link>
                    }
                </div>
            </div>
        );
    }
}
