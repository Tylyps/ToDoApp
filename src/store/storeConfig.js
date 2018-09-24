import { createStore, combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer';
import listReducer from './reducers/listReducer';

const storeConfig = () => {
    const store = createStore(combineReducers({
        exampleReducer,
        listReducer,
    }));
    return store;
};

export default storeConfig;
