import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import App from './components/app'

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import reducers from './reducers';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "bootstrap/scss/bootstrap.scss";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid-react'));
