import { ADD_FILES, CLEAR_FILES } from '../actions/files';

export default function folder(state = [], action) {
    switch (action.type) {
    case ADD_FILES:
        return action.payload;
    case CLEAR_FILES:
        return [];
    default:
        return state;
    }
}
