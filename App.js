import * as React from 'react';
import thunk from 'redux-thunk';
import { createAppContainer } from 'react-navigation';
import Router from './src/screens';
import reducers from './src/screens/reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

const composeEnhancers =
  typeof global.window === 'object' &&
  global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const persistConfig = {
  timeout: 10000,
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

const App = createAppContainer(Router);

const AppWithStore = () => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate> */}
  </Provider>
);

export default AppWithStore;
