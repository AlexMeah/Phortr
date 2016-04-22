export const ADD_FOLDER = 'ADD_FOLDER';

export function chooseFolder(payload) {
    return {
        type: ADD_FOLDER,
        payload
    };
}
