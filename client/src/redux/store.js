import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../redux/reducers/index.js";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const composeEnhancers = 
(typeof window !== "undefined" &&    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||  compose;

export default createStore(reducer, composeEnhancers(applyMiddleware(createLogger(), thunk)) );