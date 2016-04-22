export const ADD_FILES = 'ADD_FILES';
export const CLEAR_FILES = 'CLEAR_FILES';
export const LIKE_FILE = 'LIKE_FILE';
export const DISLIKE_FILE = 'DISLIKE_FILE';
export const SUPERLIKE_FILE = 'SUPERLIKE_FILE';
const supportedFileTypes = ['.png', '.jpg', '.jpeg', '.gif'];

const fs = require('electron').remote.require('fs-extra');
const path = require('electron').remote.require('path');
import hasRAW from '../utils/hasRaw';

function moveFile(folder, file) {
    console.log(file)
    fs.ensureDirSync(path.join(path.dirname(file.path), `/${folder}`));
    fs.move(file.path, path.join(path.dirname(file.path), `/${folder}`, path.basename(file.path)), (err) => {
        err && console.error(err);
    });

    if (file.raw) {
        fs.move(file.raw, path.join(path.dirname(file.raw), `/${folder}`, path.basename(file.raw)), (err) => {
            err && console.error(err);
        });
    }
}

export function addFiles(filePath) {
    const files = fs.readdirSync(filePath);

    return {
        type: ADD_FILES,
        payload: files.filter((fileName) =>
            supportedFileTypes.indexOf(path.extname(fileName).toLowerCase()) > -1
        ).map((fileName) => {
            return {
                path: path.join(filePath, fileName),
                raw: hasRAW(filePath, fileName, files)
            };
        })
    };
}

export function clearFiles() {
    return {
        type: CLEAR_FILES
    };
}

export function likeFile(file) {
    moveFile('like', file);

    return {
        type: LIKE_FILE
    };
}

export function superlikeFile(file) {
    moveFile('superlike', file);

    return {
        type: SUPERLIKE_FILE
    };
}

export function dislikeFile(file) {
    moveFile('dislike', file);

    return {
        type: DISLIKE_FILE
    };
}
