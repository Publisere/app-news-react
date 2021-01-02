import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import NewsReducer from './reducers/NewsReducer';

const rootReducer = combineReducers({
    news: NewsReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);