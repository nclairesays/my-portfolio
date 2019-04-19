const initialState = {
    navItems: [ 'Home', 'About Me', 'Skills', 'Projects', 'Contact' ],
    expanded: false
}
export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case 'TOGGLE_MENU':
            console.log("HIT REDUCER", {...state, expanded: payload.expanded})
            return {...state, expanded: payload.expanded}
        default:
            return state 
    }
}