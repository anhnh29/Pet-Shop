import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/index";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const middleware = [thunk];
debugger;

middleware.push(createLogger());

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
