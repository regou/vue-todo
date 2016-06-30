/**
 * Created by steven on 16/5/9.
 */
import App from '../App.vue';
import contain from '../components/container/contain.vue';
import login from '../components/officeLogin.vue';
import logout from '../components/officeRegist.vue';
import officeIndex from '../components/officeIndex';

module.exports = {
    '/': {
        component: App,
        subRoutes:{
            '/':{
                component: officeIndex,
                subRoutes:{
                    '/':{
                        component: login
                    },
                    '/login':{
                        component: login
                    },
                    '/logout':{
                        component: logout
                    }
                }
            }
        }
    },
    '/login': {
        name: 'login',
        component: App,
        subRoutes:{
            '/':{
                component: officeIndex,
                subRoutes:{
                    '/':{
                        component: login
                    }
                }
            }
        }
    },
    '/logout': {
        name: 'logout',
        component: App,
        subRoutes:{
            '/':{
                component: officeIndex,
                subRoutes:{
                    '/':{
                        component: logout
                    }
                }
            }
        }
    },
    '/contain': {
        name: 'contain',
        component: contain
    }
};
