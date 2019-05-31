const initialState = {
    navItems: [ 'Home', 'About', 'Projects', 'Resume', 'Contact' ], // 'Skills',
    expanded: false,
    loading: true,
    showModal: false,
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
    ],
    projects: [
        {   
            key: 'b2b',
            title: 'Babbles to Babbles',
            description: 'description of b2b',
            images: [],
            url: {
                deployed: 'https://protected-cliffs-89398.herokuapp.com/',
                github: 'https://github.com/nclairesays/babbles-to-babbles-backend/',
                ghServer: 'https://github.com/nclairesays/babbles-to-babbles-backend/',
                ghClient: 'https://github.com/nclairesays/babbles-to-babbles-frontend'
            }
        },
        {   
            key: 'jTreender',
            title: 'Jackson Treender',
            description: 'description of jTreender',
            images: [],
            url: {
                deployed: 'https://www.youtube.com/watch?v=1VYzxZ2uxXo',
                ghServer: 'https://github.com/nclairesays/jackson-treender-backend',
                ghClient: ' https://github.com/nclairesays/jackson-treender-frontend'
            },
        },
        {   
            key: 'jobsForHope',
            title: 'Jobs For Hope',
            description: 'description of meetupEd',
            images: [],
            url: {
                deployed: 'https://jobs-for-hope.herokuapp.com',
                gihub: 'https://github.com/hackforla/jobs-for-hope/tree/claire'
            }
        },  
        {   
            key: '',
            title: 'Meetup Education',
            description: 'description of meetupEd',
            images: [],
            url: {}
        },      
    ]
}
export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case 'TOGGLE_MENU':
            return {...state, expanded: payload.expanded}
        case 'TOGGLE_LOAD':
            return {...state, loading: payload.loading}
        case 'TOGGLE_MODAL': {
            return {...state, showModal: payload.showModal}
        }
        default:
            return state 
    }
}