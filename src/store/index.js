/**
 * Created by wx on 6/29/16.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import {localLoad,localPush} from './mutations';
import mutations from './mutations';
Vue.use(Vuex);


const state = {
    user_id:'anonymous',
    items: [],
    allAccount: []
};

localLoad(state);


export default new Vuex.Store({
    state,
    mutations
})
