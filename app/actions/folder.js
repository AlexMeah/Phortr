export const ADD_FOLDER = 'ADD_FOLDER';
export const REMOVE_FOLDER = 'REMOVE_FOLDER';

export function chooseFolder(payload) {
    return {
        type: ADD_FOLDER,
        payload
    };
}

export function removeFolder(payload) {
    return {
        type: REMOVE_FOLDER,
        payload
    };
}
