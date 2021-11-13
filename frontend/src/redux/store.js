import { createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({

})

const middleware = [thunk];

const store = createStore(
    reducr,
    composeWithDevTools9(applyMiddleware(...middleware))
);
 export default store;