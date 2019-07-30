// import actionTypes from './../actiontype';
import { MAINLAYOUT } from './../actiontype';

export const setData = (data) => {
    return async dispatch => {
        try{
            
            dispatch({
              type: MAINLAYOUT.SET_DATA,
              payload: data  
            })

        }catch(err){

        }
    }
}