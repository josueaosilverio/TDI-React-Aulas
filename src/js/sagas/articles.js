import {call, put, takeLatest} from 'redux-saga/effects'
import {ARTICLES_FETCH_ERROR, ARTICLES_FETCH_SUCCEEDED, FETCH_ARTICLES} from '../constants/action-types'

import {ENDPOINT} from "../constants/services";

function fetchAll() {

    return fetch(ENDPOINT).then(response => response.json(),);
}

function* fetchArticles() {
    try {
        const articles = yield call(fetchAll);
        yield put({type: ARTICLES_FETCH_SUCCEEDED, payload: articles});
    } catch (e) {

        yield put({type: ARTICLES_FETCH_ERROR, message: e.message});
    }
}

function* mySaga() {
    console.log('articles saga init');
    yield takeLatest(FETCH_ARTICLES, fetchArticles);
}

export default mySaga;