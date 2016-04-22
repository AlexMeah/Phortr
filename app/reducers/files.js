import { ADD_FILES } from '../actions/files';

export default function folder(state = [], action) {
    switch (action.type) {
    case ADD_FILES:
        return action.payload;
    default:
        return state;
    }
}
