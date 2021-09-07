import {FETCH_DETAILS, FETCH_MOVIES, FETCH_GENRES, FETCH_MOVIES_BY_GENRE} from "./actionsTypes";

export const fetchMovies = (movies) => {
    return {type: FETCH_MOVIES, payload: movies}
}

export const fetchDetails = (details) => {
    return {type: FETCH_DETAILS, payload: details}
}

export const fetchGenres = (genres) => {
    return {type: FETCH_GENRES, payload: genres}
}

export const fetchMoviesByGenre = (movies) => {
    return {type: FETCH_MOVIES_BY_GENRE, payload: movies}
}