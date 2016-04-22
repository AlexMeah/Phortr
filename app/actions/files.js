export const ADD_FILES = 'ADD_FILES';
const supportedFileTypes = ['.png', '.jpg', '.jpeg', '.gif'];

const fs = require('electron').remote.require('fs');
const path = require('electron').remote.require('path');

export function addFiles(filePath) {
    return {
        type: ADD_FILES,
        payload: fs.readdirSync(filePath).filter((fileName) =>
            supportedFileTypes.indexOf(path.extname(fileName).toLowerCase()) > -1
        ).map((fileName) => path.join(filePath, fileName))
    };
}
