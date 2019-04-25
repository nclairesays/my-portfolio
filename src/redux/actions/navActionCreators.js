
export function toggleMenu(boolean) {
    return {
        type: 'TOGGLE_MENU',
        payload: {
            expanded: boolean
        }
    }
}

export function toggleLoad(boolean) {
    console.log('incoming toggle load bool', boolean)
    return {
        type: 'TOGGLE_LOAD',
        payload: {
            loading: boolean
        }
    }
}
