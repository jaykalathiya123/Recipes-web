import { createStore, applyMiddleware, compose } from "redux";

import {thunk} from 'redux-thunk'

import mainReducers from "./services/Reducers"; 

// Properly setting up Redux DevTools with middleware
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  mainReducers,
  composeEnhancers(applyMiddleware(thunk))
);
