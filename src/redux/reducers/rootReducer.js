const initialState = {
    navItems: [ 'Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact' ],
    expanded: false,
    loading: true,
}
export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case 'TOGGLE_MENU':
            return {...state, expanded: payload.expanded}
        // case 'TOGGLE_LOAD':
        //     return {...state, loading: payload.loading}
        default:
            return state 
    }
}