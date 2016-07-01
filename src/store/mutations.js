/**
 * Created by wx on 6/29/16.
 */


export function localPush(state) {
    window.localStorage.setItem(`todo-list-${state.user_id}`, JSON.stringify(state.items));
}

export function localLoad(state) {
    var dataString = window.localStorage.getItem(`todo-list-${state.user_id}`) || '[]';
    if(dataString) {
        state.items = JSON.parse(dataString);
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

const mutations = {
    // TODO: 放置我们的状态变更函数
    ADD_NEW:function (state, text, status, label) {
        console.log(state, text, status, label)
        state.items.unshift({id:Date.now(), text: text, status: status, label: label, isEditing: true });
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
    FILTER_DATAS:function (state,label) {
        console.log(state,label,_.filter(state.items,{label:label}),444444)
        _.filter(state,{label:label})
    }
}

export default mutations;
