import { MAINLAYOUT } from './../actiontype';

const DEFAULT_STATE = " "

const mainLayoutReducer = (state=DEFAULT_STATE, action)=> {
    const {type, payload} = action;

    switch(type){
        case MAINLAYOUT.GET_DATA:
            return payload;
        default:
            return state;
    }
}

export { mainLayoutReducer };