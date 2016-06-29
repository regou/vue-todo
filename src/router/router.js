/**
 * Created by steven on 16/5/9.
 */
import App from '../App.vue';
import contain from '../components/container/contain.vue';

module.exports = {
    '/': {
        component: App
    },
    '/login': {
        component: App
    },
    '/logout': {
        component: App
    },
    '/contain': {
        name: 'contain',
        component: contain
    }
};
