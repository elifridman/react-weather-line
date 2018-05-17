import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import rootReducer from './store/reducers';
import ReduxPromise from 'redux-promise';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)


ReactDOM.render(<Provider store={createStoreWithMiddleware(rootReducer)}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
