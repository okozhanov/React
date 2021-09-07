import {FETCH_DETAILS, FETCH_GENRES, FETCH_MOVIES, FETCH_MOVIES_BY_GENRE} from "../actions";

export const RootReducer = (state = {movies: [], genres: [], genres_movies: [], details: {}}, action) => {
    switch (action.type) {
        case FETCH_MOVIES :
            return {...state, movies: action.payload}
        case FETCH_DETAILS :
            return {...state, details: action.payload}
        case FETCH_GENRES :
            return {...state, genres: action.payload}
        case FETCH_MOVIES_BY_GENRE :
            return {...state, genres_movies: action.payload}
        default :
            return state
    }
}