/**
 * Created by wx on 6/29/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import {localLoad,localPush} from './mutations';
import mutations from './mutations';
Vue.use(Vuex);


const state = {
    forecast:{
        "code": "4",
        "date": "24 Jun 2016",
        "day": "Fri",
        "high": "87",
        "low": "75",
        "text": "Thunderstorms"
    },
    filterBy:function (item,status) {
        return true
    },
    user_id:'anonymous',
    items: [],
    allAccount: []
};

state.user_id = localLoad(state,'user_id','anonymous');

state.items = localLoad(state,undefined,[]);

window.state = state;


export default new Vuex.Store({
    state,
    mutations
})
