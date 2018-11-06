import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import exampleReducer from './reducers/exampleReducer';
import list from './reducers/list';

const logAction = store => next => action => {
    const result = next(action);
    console.log('TEST', JSON.stringify(result));
    return result;
}

const storeConfig = () => {
    const store = createStore(
        combineReducers({
            exampleReducer,
            list,
        }),
        applyMiddleware(logAction)
    );
    return store;
};

export default storeConfig;
