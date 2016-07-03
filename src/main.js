import Vue from 'vue';
import Index from './Index';
import VueRouter from 'vue-router';
import router from './router/router.js';
import 'lodash';
window.$ = window.jQuery = require('jquery')
/* eslint-disable no-new */

Vue.use(VueRouter);

Vue.transition('vtslide', {
    enterClass: 'bounceInLeft',
    leaveClass: 'bounceOutRight'
});

Vue.filter('simpleDate', function (dateString) {
    var d = new Date();
    var month = d.getMonth()+1;
    function twoDig(num){
        return num<=9?'0'+String(num):num
    }
    let nowdateString = `${d.getFullYear()}-${twoDig(month)}-${twoDig(d.getDate())}`;

    console.log(nowdateString)
    var res = dateString.replace(nowdateString,'');
    return res.trim();

})

let vueRouter = new VueRouter();
vueRouter.map(router);
vueRouter.start(Index, '#master-wrapper');

