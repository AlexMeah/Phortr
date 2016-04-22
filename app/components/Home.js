import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
const dialog = require('electron').remote.dialog;

export default class Home extends Component {
    chooseFolder() {
        this.props.chooseFolder(dialog.showOpenDialog({ properties: ['openDirectory'] }));
    }

    componentWillMount() {
        this.props.clearFiles();
        this.props.removeFolder();
        this.props.resetNavigation();
    }

    render() {
        return (
            <div>
                <div className={styles.container}>
                    <h2>Please select a folder</h2>

                    <button className={styles.btn} onClick={this.chooseFolder.bind(this)}>{this.props.folder ? 'Change Folder' : 'Choose Folder'}</button>

                    {
                        this.props.folder &&
                        <Link className={styles.btn + ' ' + styles['btn-cta']} to="/photos">Start Sorting</Link>
                    }
                </div>
            </div>
        );
    }
}
