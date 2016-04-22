import { ADD_FOLDER, REMOVE_FOLDER } from '../actions/folder';

export default function folder(state = false, action) {
    switch (action.type) {
    case ADD_FOLDER:
        return action.payload[0];
    case REMOVE_FOLDER:
        return false;
    default:
        return state;
    }
}
