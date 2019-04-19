
export function toggleMenu(boolean) {
    return {
        type: 'TOGGLE_MENU',
        payload: {
            expanded: boolean
        }
    }
}
