import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from 'redux-logger';

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunkMiddleware, loggerMiddleware];

export const store = createStore(
  persistedReducer,
  {},
  compose(
    applyMiddleware(...middlewares)
  )
)
 
export const persistor = persistStore(store)
