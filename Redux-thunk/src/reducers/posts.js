import {  POSTS_RESOLVE, POSTS_REJECTED,  POSTS_PENDING } from "../constants";

const initialValues = {
    posts: [],
    isLoading: false,
    isError: false
}

export const postsReducer = (state = initialValues, action) => {
    switch(action.type) {
        case POSTS_PENDING: {
            return {
                ...state,
                isLoading: true
            };
        }
        case POSTS_RESOLVE: {
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            };
        }
        case POSTS_REJECTED: {
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        }

        default: {
            return state;
        }
    }
};