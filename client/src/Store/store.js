import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
// const middleware = [thunk];
const allStoreEnhancers = compose(applyMiddleware(thunk));
const store = createStore(rootReducer,allStoreEnhancers);

export default store;