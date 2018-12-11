import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';

import articles from "../reducers/articles";
import auth from "../reducers/auth";
import user from "../reducers/user";

import rootSaga from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        articles, auth, user,
    }),
    applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga);

export default store;