
export function toggleModal(boolean) {
    return {
        type: 'TOGGLE_MODAL',
        payload: {
            expanded: boolean
        }
    }
}