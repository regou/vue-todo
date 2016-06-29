/**
 * Created by wx on 6/29/16.
 */


//如果涉及到异步,请不要直接调用makeAction,要Promise解决后dispatch
export const addNew = makeAction('ADD_NEW');

function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

