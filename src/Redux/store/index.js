import {createStore} from 'redux'
import {reducerToDo} from "../reducers/reducerToDo";

export let store = createStore(reducerToDo)
