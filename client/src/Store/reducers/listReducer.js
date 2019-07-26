import actionType from '../actiontype'

const DEFAULT_STATE = {

}

const listReducer = (state=DEFAULT_STATE, action)=> {
    const {type, payload} = action;
    switch(type){
        case actionType.list.ADD_ITEM_LIST:
            return [...state, payload];
        default:
            return state;
    }
}

export { listReducer };