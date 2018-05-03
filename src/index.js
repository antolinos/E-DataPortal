import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
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

const store = createStore(
  reducer,
  applyMiddleware(...middleware, logger, thunk)
)



render(
  <Provider store={store}>
    <App />
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
