import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";

import "./scss/style.scss";

import rootReducer from "./store/redusers";

import App from "./App";
import ReactDOM from "react-dom";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
