import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {animals} from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({
    animals
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;