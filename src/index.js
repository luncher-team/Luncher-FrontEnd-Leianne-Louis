import React from 'react';
import ReactDOM from 'react-dom';
import logger from "redux-logger";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);