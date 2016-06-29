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

const mutations = {
    // TODO: 放置我们的状态变更函数
    ADD_NEW:function (state, text, status, label) {
        state.items.unshift({ text: text, status: status, label: label, isEditing: true });
        localPush(state);
    }
}

export default mutations;
