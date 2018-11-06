import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import exampleReducer from './reducers/exampleReducer';
import list from './reducers/list';

const storeConfig = () => {
    const store = createStore(
        combineReducers({
            exampleReducer,
            list,
        }),
        applyMiddleware(thunk)
    );
    return store;
};

export default storeConfig;
