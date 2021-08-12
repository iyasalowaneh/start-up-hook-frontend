
// redux
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// actions
import { checkForToken } from "./actions/authAction";

// reducers
import rootReducer from "./reducers/index";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer, // reducer function
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkForToken());

export default store;