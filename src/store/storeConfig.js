import { createStore, combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer';
import list from './reducers/list';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const storeConfig = () => {
    const store = createStore(combineReducers({
        exampleReducer,
        list,
    }),
    persistedState,
    );
    return store;
};

export default storeConfig;
