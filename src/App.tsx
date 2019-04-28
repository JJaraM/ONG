import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './app/AppRouter';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { getAllProducts } from './actions';

export const App: React.StatelessComponent = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts());

const appElement = document.getElementById('root');
if (appElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  appElement);
}
