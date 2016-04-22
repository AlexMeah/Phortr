import { NEXT_PHOTO, PREVIOUS_PHOTO, RESET_NAVIGATION } from '../actions/navigation';

export default function navigation(state = 1, action) {
    switch (action.type) {
    case NEXT_PHOTO:
        return state + 1;
    case PREVIOUS_PHOTO:
        return state - 1;
    case RESET_NAVIGATION:
        return 1;
    default:
        return state;
    }
}
