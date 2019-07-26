import actionType from '../actiontype'

const addItem = () => {
    return (dispatch, getState) => {
        dispatch({
            type: actionType.list.ADD_ITEM_LIST
        })
    }
}

const listAction = {
    addItem : addItem
}

export {  listAction }
