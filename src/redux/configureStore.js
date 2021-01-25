import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import imagesReducer from './ducks/images';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  logger,
];

const store = () => {
  const store = configureStore({
    reducer: {
      imagesStore: imagesReducer,
    },
    middleware,
  });
  sagaMiddleware.run(sagas);

  return store;
};

export default store();
