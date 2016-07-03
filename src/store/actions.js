/**
 * Created by wx on 6/29/16.
 */


//如果涉及到异步,请不要直接调用makeAction,要Promise解决后dispatch
export const setAccount = makeAction('SET_ACCOUNT');
export const changeForecast = makeAction('CHANGE_FORECAST');
export const addNew = makeAction('ADD_NEW');
export const pushNew = makeAction('PUSH_NEW');
export const updateItem = makeAction('UPDATE_ITEM');
export const delItem = makeAction('DEL_ITEM');
export const filteDatas = makeAction('FILTER_DATAS');


function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

