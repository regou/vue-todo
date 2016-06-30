import Vue from 'vue';
import Index from './Index';
import VueRouter from 'vue-router';
import router from './router/router.js';
import 'lodash';
window.$ = window.jQuery = require('jquery')
/* eslint-disable no-new */

Vue.use(VueRouter);
let vueRouter = new VueRouter();
vueRouter.map(router);
vueRouter.start(Index, '#master-wrapper');

