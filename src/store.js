import { applyMiddleware, compose, createStore } from "redux";

import reducers from "./reducers";
import thunk from "redux-thunk";

const extension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const midleware = extension(applyMiddleware(thunk));
const store = createStore(reducers, midleware);

export default store;
