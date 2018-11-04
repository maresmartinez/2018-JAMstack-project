import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from '../reducers';

const persistConfig = {
  key: 'EmoTrack',
  storage,
  whitelist: ['auth'],
};
let enhancer;
if (process.env.NODE_ENV !== 'production') {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  enhancer = compose;
}

export const configureStore = (initialState) => {
  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = createStore(
    persistedReducer,
    initialState,
    enhancer(applyMiddleware(thunk)),
  );

  // if (process.env.NODE_ENV === 'development') {
  //   if (module.hot) {
  //     module.hot.accept('../Reducers', () => {
  //       store.replaceReducer(reducer)
  //     })
  //   }
  // }
  return store
}

const store = configureStore();

export default store
