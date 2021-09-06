import {FETCH_DETAILS, FETCH_MOVIES} from "./actionsTypes";

export const fetchMovies = (movies) => {
    return {type: FETCH_MOVIES, payload: movies}
}

export const fetchDetails = (details) => {
    return {type: FETCH_DETAILS, payload: details}
}