import {POSTS_RESOLVE, POSTS_REJECTED, POSTS_PENDING} from "../constants";
import {store} from "../store";

export const setPostsPending = () => ({type: POSTS_PENDING});
export const setPostsData = (data) => ({type: POSTS_RESOLVE, payload: data});
export const setPostsError = () => ({type: POSTS_REJECTED});

export const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((response) => store.dispatch(setPostsData(response)))
        .catch(() => store.dispatch(setPostsError()))

    return  setPostsPending();
}