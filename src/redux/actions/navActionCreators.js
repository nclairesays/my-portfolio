
export function toggleMenu(boolean) {
    return {
        type: 'TOGGLE_MENU',
        payload: {
            expanded: boolean
        }
    }
}

// not using at the moment
// export function toggleLoad(boolean) {
//     return {
//         type: 'TOGGLE_LOAD',
//         payload: {
//             loading: boolean
//         }
//     }
// }
