import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";

import { createStore, applyMiddleware, combineReducers } from "redux";
import LiveEventsReducer from "./redux/reducers/liveEventsReducer";
import ErrorReducer from "./redux/reducers/errorReducer";

const store = createStore(
  combineReducers({ liveEvents: LiveEventsReducer, error: ErrorReducer }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
