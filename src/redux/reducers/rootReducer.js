const initialState = {
    navItems: [ 'Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact' ],
    expanded: false,
    loading: true,
    skills: [
        'https://www.armia.com/project/img/rubyrails.png',
        'https://library.kissclipart.com/20180829/efq/kissclipart-ruby-language-logo-clipart-the-ruby-programming-la-49b722d8b01d07d8.png',
        'http://pluspng.com/img-png/logo-javascript-png-esp8266-ile-sunucuya-javascript-530.png',
        'http://pluspng.com/img-png/logo-javascript-png-file-javascript-logo-png-1052.png',
        'http://www.sclance.com/pngs/react-logo-png/react_logo_png_1140479.png',
        'https://cdn-images-1.medium.com/max/1200/1*ub1DguhAtkCLvhUGuVGr6w.png',
        'https://banner2.kisspng.com/20180511/zie/kisspng-redux-react-javascript-vue-js-single-page-applicat-5af5cde3d3a5e8.2671715915260584678669.jpg',
        'https://codedistrict.io/wp-content/uploads/2017/12/reduxLogo.png',
        'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
        'http://mason.gmu.edu/~tchowdh6/img/brand/GitHub-logo1.png',
        'https://banner2.kisspng.com/20180526/oqt/kisspng-microsoft-sql-server-mysql-database-logo-5b098c6ebad6d7.7316225815273524307653.jpg',
        'https://banner2.kisspng.com/20180821/isz/kisspng-postgresql-database-logo-application-software-comp-iterative-consulting-web-development-prototyping-5b7c0d6cf2b7c1.0984725915348565569942.jpg',
        'https://banner2.kisspng.com/20180820/csy/kisspng-react-native-native-apps-parallel-fr-android-un-react-native-5b7a5c48d78603.7634975615347456728828.jpg',
        'https://www.essentialdesigns.net/wp-content/uploads/2017/10/heartreact.png',
        'https://tapoueh.org/img/JSON.png',
        'https://tips.tutorialhorizon.com/files/2017/09/json-logo.png',
        'https://icon2.kisspng.com/20171221/vvq/linux-logo-vector-5a3b5bdfb56365.997822941513839583743.jpg'
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