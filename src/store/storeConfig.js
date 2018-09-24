import { createStore, combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer';
import list from './reducers/list';

const storeConfig = () => {
    const store = createStore(combineReducers({
        exampleReducer,
        list,
    }));
    return store;
};

export default storeConfig;
