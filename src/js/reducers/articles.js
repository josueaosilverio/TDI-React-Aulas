import {ADD_ARTICLE, ARTICLES_FETCH_ERROR, ARTICLES_FETCH_SUCCEEDED, DELETE_ARTICLE} from "../constants/action-types";

const initialState = [];

const articlesReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_ARTICLE:
            console.log('add: ', action.payload);
            return [...state, action.payload];
        case DELETE_ARTICLE:
            console.log('delete: ', action.payload);
            return {...state, ...state.filter((x) => x !== action.payload)};
        case ARTICLES_FETCH_SUCCEEDED:
            console.log('success: ', action.payload);
            return [...state, ...action.payload.data];
        case ARTICLES_FETCH_ERROR:
            console.log('Article fetch Error: ' + action.message);
        default:
            return state;
    }
};
;

export default articlesReducer;
