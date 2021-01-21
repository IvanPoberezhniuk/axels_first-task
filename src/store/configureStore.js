import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import imagesReducer from './modules/images';
import createLogger from 'redux-logger';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];

const store = () => {
  const store = configureStore({
    reducer: {
      imagesStore: imagesReducer,
    },
    middleware
  });
  sagaMiddleware.run(sagas);

  return store;
};

export default store();

