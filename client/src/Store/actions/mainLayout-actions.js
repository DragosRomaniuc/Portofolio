import axios from 'axios';
// import actionTypes from './../actiontype';
import { MAINLAYOUT } from './../actiontype';

export const getData = () => {
    return async dispatch => {
        try{

            dispatch({
              type: MAINLAYOUT.GET_DATA,
              payload: 'this is my DATA from MAINLAYOUT'  
            })

        }catch(err){

        }
    }
}