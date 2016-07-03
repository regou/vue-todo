/**
 * Created by wx on 6/29/16.
 */

import {filterRelations} from '../constans';
export function localPush(state,target) {
    if(target){
        return window.localStorage.setItem(target, JSON.stringify(state[target]));
    }
    return window.localStorage.setItem(`todo-list-${state.user_id}`, JSON.stringify(state.items));
}

export function localLoad(state,target,def) {
    var target = target || `todo-list-${state.user_id}`;
    var dataString = window.localStorage.getItem(target);
    if(dataString) {
        state[target] = JSON.parse(dataString);
    }else{
        state[target] = def;
    }
    return true;
}

export function getAccount(state) {
    var dataStringAllAccount = window.localStorage.getItem('account') || '[]';
    if(dataStringAllAccount) {
        state.allAccount = JSON.parse(dataStringAllAccount);
    }
    return true;
}

function getCurrentFilterLabel(state) {
    var label = filterRelations.get(state.filterBy);
    return label || 'normal'

}

const mutations = {
    SET_ACCOUNT:function(state,name){
        state.user_id = name || 'anonymous';
        localPush(state,'user_id');
    },
    CHANGE_FORECAST:function(state,info){
        state.forecast = info;
    },
    // TODO: 放置我们的状态变更函数
    ADD_NEW:function (state, text, status,isEditing,time) {
        let now = Date.now();
        var label = getCurrentFilterLabel(state);
        // console.log()
        state.items.unshift({id:now, createTime:now, text: text, status: status, label: label, isEditing: !!isEditing ,time:time});
        localPush(state);
    },
    UPDATE_ITEM:function (state,updateData) {
        var idx = state.items.findIndex(o=>o.id === updateData.id);
        Object.assign(state.items[idx],updateData);
        console.log(state,updateData)
        localPush(state);
    },
    DEL_ITEM:function (state,itemRef) {
        state.items.$remove(itemRef);
        console.log(state,itemRef,_.filter(state.items,{label:'normal'}),5555)
        localPush(state);
    },
    FILTER_DATAS:function (state,func,status) {
        if (typeof func === 'function'){
            state.filterBy = func;
            console.log(state,state.filterBy,33333)
        }else{
            throw  new TypeError('Require type function')
        }

    }
}

export default mutations;
