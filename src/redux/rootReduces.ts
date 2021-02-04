import { combineReducers } from '@reduxjs/toolkit';
import imagesReducer from './ducks/images';

const rootReducer = combineReducers({ imagesStore: imagesReducer });

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
