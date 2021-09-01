import {reducerUsers} from "./reducer.users";
import {reducerPosts} from "./reducer.posts";
import {combineReducers} from 'redux'

let rootReducer = combineReducers({reducerUsers, reducerPosts})

export {rootReducer}