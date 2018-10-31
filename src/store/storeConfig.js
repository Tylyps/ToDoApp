import { createStore, combineReducers, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import exampleReducer from './reducers/exampleReducer';
import list from './reducers/list';

const storeConfig = () => {
    const createStoreWithMiddleware = applyMiddleware(save())(createStore)
    const store = createStoreWithMiddleware(
        combineReducers({
            exampleReducer,
            list,
        }),
        load()
    );
    return store;
};

export default storeConfig;
