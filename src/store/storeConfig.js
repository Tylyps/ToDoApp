import { createStore, combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer';

const storeConfig = () => {
    const store = createStore(combineReducers({
        exampleReducer,
    }));
    return store;
};

export default storeConfig;
