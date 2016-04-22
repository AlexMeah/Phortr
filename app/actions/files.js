export const ADD_FILES = 'ADD_FILES';
export const CLEAR_FILES = 'CLEAR_FILES';
export const LIKE_FILE = 'LIKE_FILE';
export const DISLIKE_FILE = 'DISLIKE_FILE';
export const SUPERLIKE_FILE = 'SUPERLIKE_FILE';
const supportedFileTypes = ['.png', '.jpg', '.jpeg', '.gif'];

const fs = require('electron').remote.require('fs-extra');
const path = require('electron').remote.require('path');

export function addFiles(filePath) {
    return {
        type: ADD_FILES,
        payload: fs.readdirSync(filePath).filter((fileName) =>
            supportedFileTypes.indexOf(path.extname(fileName).toLowerCase()) > -1
        ).map((fileName) => path.join(filePath, fileName))
    };
}

export function clearFiles() {
    return {
        type: CLEAR_FILES
    };
}

export function likeFile(file) {
    fs.ensureDirSync(path.join(path.dirname(file), '/like'));
    fs.move(file, path.join(path.dirname(file), '/like', path.basename(file)), (err) => {
        err && console.error(err);
    });

    return {
        type: LIKE_FILE
    };
}

export function superlikeFile(file) {
    fs.ensureDirSync(path.join(path.dirname(file), '/superlike'));
    fs.move(file, path.join(path.dirname(file), '/superlike', path.basename(file)), (err) => {
        err && console.error(err);
    });

    return {
        type: SUPERLIKE_FILE
    };
}

export function dislikeFile(file) {
    fs.ensureDirSync(path.join(path.dirname(file), '/dislike'));
    fs.move(file, path.join(path.dirname(file), '/dislike', path.basename(file)), (err) => {
        err && console.error(err);
    });

    return {
        type: DISLIKE_FILE
    };
}
