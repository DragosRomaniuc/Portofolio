import { MAINLAYOUT } from './../actiontype';

const DEFAULT_STATE = {
    machines: {}
}

const mainLayoutReducer = (state=DEFAULT_STATE, action)=> {
    const {type, payload} = action;
    // console.log('reducer called',payload)
    switch(type){
        case MAINLAYOUT.GET_DATA:
            return payload;
        case MAINLAYOUT.SET_DATA:
            let edited = {...state.machines};
            edited[payload.macA] = payload;
            return {
                ...state,
                machines: {...edited}
            }
        default:
            return state;
    }
}

export { mainLayoutReducer };