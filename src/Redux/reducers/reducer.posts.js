import {FETCH_POSTS} from "../actions";


const reducerPosts = (state = {posts: []}, action) => {
    switch (action.type) {
        case FETCH_POSTS :
            return {...state, posts: action.payload}
        default :
            return state
    }
}

export {reducerPosts}