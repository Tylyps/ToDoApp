import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';

import './styles/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = storeConfig();
store.subscribe(() => {
    const state = store.getState();
    console.log(state);
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
