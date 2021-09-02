import {ADD_USER, CLEAR_USERS, FETCH_POSTS, FETCH_USERS} from "./actionsTypes";


export const fetchUsers = (value) => {
    return {type: FETCH_USERS, payload: value}
}

export const clearUsers = () => {
    return {type: CLEAR_USERS}
}

export const addUser = (value) => {
    return {type: ADD_USER, payload: value}
}

export const fetchPosts = (value) => {
    return {type: FETCH_POSTS, payload: value}
}