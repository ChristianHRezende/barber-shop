import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/';

import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
//index saga
import indexSagas from './sagas';

//initialize saga middleware
const sagaMiddleware = createSagaMiddleware();

//store
export const store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware),
);

//start sagas
sagaMiddleware.run(indexSagas);
