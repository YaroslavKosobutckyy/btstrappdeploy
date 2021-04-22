import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import reduxThunkMiddleware from 'redux-thunk';

export const store = createStore(
    reducer,
    applyMiddleware(reduxThunkMiddleware)
);


