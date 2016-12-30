// @flow
import "../polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter/Root';
import {Provider} from "react-redux";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <Counter content="hello world"/>
  </Provider>
  , document.getElementById('app')
);