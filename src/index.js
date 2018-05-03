import React from "react";
import ReactDOM from "react-dom";
import Main from "./container/Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducer/index'

const store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  </Provider>, 
  document.getElementById("root")
);