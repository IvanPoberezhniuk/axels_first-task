import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReduces';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  logger
];

const store = (() => {
  const store = configureStore({
    reducer: rootReducer,
    middleware
  });
  sagaMiddleware.run(sagas);

  return store;
})();


export type AppDispatch = typeof store.dispatch
export default store;
