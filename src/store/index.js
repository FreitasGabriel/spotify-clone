import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas'
import reducers from './ducks'

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMiddleware() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor})

middlewares.push(sagaMiddleware);

const createApproppriateStore = process.env.NODE_ENV === 'development' ? console.tron.createStore : createStore;

const store = createApproppriateStore(reducers, compose(applyMiddleware(...middlewares)))

sagaMiddleware.run(sagas);

export default store;