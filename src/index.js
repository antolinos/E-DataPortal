import React from 'react';
import { render } from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Provider } from 'react-redux'
import logger  from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'



import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];
/*if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}*/

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware, logger, thunk)
)

const persistor = persistStore(store)

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();

store.subscribe(() => {
  console.log("store changed", JSON.stringify(store.getState()))
})

store.dispatch((dispatch) => {
    //dispatch({type: SIGN_IN, username: "reader"})
    //dispatch({type: LOGGED_IN, username: "reader", sessionId: "23432aasdfa"})
  }
)
