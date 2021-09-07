
export const getGenres = () => {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4bd79d5e6ae0aa054269482c1b7710ec')
        .then(value => value.json())
}

export const getMoviesByGenre = (genreId, page) => {
    return fetch('https://api.themoviedb.org/3/discover/movie?api_key=4bd79d5e6ae0aa054269482c1b7710ec&language=en-US&sort_by=popularity.desc&page='+ page +'&with_genres='+ genreId +'&with_watch_monetization_types=flatrate')
        .then(value => value.json())
}