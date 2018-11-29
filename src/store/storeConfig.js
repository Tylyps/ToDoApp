import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import exampleReducer from './reducers/exampleReducer';
import list from './reducers/list';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeConfig = () => {
    const store = createStore(
        combineReducers({
            exampleReducer,
            list,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

export default storeConfig;
