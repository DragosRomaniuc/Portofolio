import { combineReducers } from 'redux';
import { mainLayoutReducer } from './reducers';
import config from './../config';
const defaultReducer = (state=config, action) => state;

const rootReducer = combineReducers({
    mainLayout: mainLayoutReducer,
    config: defaultReducer
})

export default rootReducer;