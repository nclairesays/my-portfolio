const initialState = {
    navItems: [ 'Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact' ],
    expanded: false,
    loading: true,
    skills: [
        'https://www.armia.com/project/img/rubyrails.png',
        'http://www.sclance.com/pngs/react-logo-png/react_logo_png_1140479.png',

        'http://pluspng.com/img-png/logo-javascript-png-esp8266-ile-sunucuya-javascript-530.png',
        'http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png',
        'https://codedistrict.io/wp-content/uploads/2017/12/reduxLogo.png',
        'http://mason.gmu.edu/~tchowdh6/img/brand/GitHub-logo1.png',
        'https://cdn-images-1.medium.com/max/1200/1*ub1DguhAtkCLvhUGuVGr6w.png',
        'https://tips.tutorialhorizon.com/files/2017/09/json-logo.png',
        'https://www.essentialdesigns.net/wp-content/uploads/2017/10/heartreact.png',

    ]
}
export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case 'TOGGLE_MENU':
            return {...state, expanded: payload.expanded}
        case 'TOGGLE_LOAD':
            return {...state, loading: payload.loading}
        default:
            return state 
    }
}