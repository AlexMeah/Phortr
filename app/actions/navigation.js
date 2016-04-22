export const NEXT_PHOTO = 'NEXT_PHOTO';
export const PREVIOUS_PHOTO = 'PREVIOUS_PHOTO';
export const RESET_NAVIGATION = 'RESET_NAVIGATION';

export function nextPhoto() {
    return {
        type: NEXT_PHOTO
    };
}

export function prevPhoto() {
    return {
        type: PREVIOUS_PHOTO
    };
}

export function resetNavigation() {
    return {
        type: RESET_NAVIGATION
    };
}
