import {FETCH_DETAILS, FETCH_MOVIES} from "../actions";

export const RootReducer = (state = {movies: [], genres: [], details: {}}, action) => {
    switch (action.type) {
        case FETCH_MOVIES :
            return {...state, movies: action.payload}
        case FETCH_DETAILS :
            return {...state, details: action.payload}
        default :
            return state
    }
}