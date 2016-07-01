/**
 * Created by wx on 6/29/16.
 */


//如果涉及到异步,请不要直接调用makeAction,要Promise解决后dispatch
export const addNew = makeAction('ADD_NEW');
export const updateItem = makeAction('UPDATE_ITEM');
export const delItem = makeAction('DEL_ITEM');
export const filteDatas = makeAction('FILTER_DATAS');


function makeAction (type) {
    console.log(type,33333)
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

