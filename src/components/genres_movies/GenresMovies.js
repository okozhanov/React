import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMoviesByGenre} from "../../services/genres.services";
import {fetchMoviesByGenre} from "../../Redux/actions";
import GenresMovieCard from "../genres_movie_card/GenresMovieCard";
import './GenresMovies.css'

export default function GenresMovies({history}) {

    let genreId = history.location.state_1
    let genreName = history.location.state_2

    let movies = useSelector(state => state.genres_movies)

    let dispatch = useDispatch()

    let [page, setPage] = useState(1)
    let previousPage = () => {

        if (page === 1) {
            return page
        } else if (page >= 1) {
            setPage(page -= 1)
        }
    }
    let nextPage = () => {

        if (page === 1000) {
            return page
        } else if (page <= 1000) {
            setPage(page += 1)
        }
    }

    useEffect(() => {
        getMoviesByGenre(genreId, page).then(value => dispatch(fetchMoviesByGenre(value.results)))
    }, [genreId, page, dispatch])

    return (
        <div className={'page_movies_by_genre'}>
            <h1 className={'header_light'}>{genreName}</h1>
            <div className={'movies_cards'}>
                {movies.map(thisMovie => <GenresMovieCard key={thisMovie.id} thisMovie={thisMovie} genre={genreName}/>)}
            </div>
            <div className={'page_clicker_light'}>
                <button className={'clicker_button_light'} onClick={previousPage}>Previous</button>
                <span className={'page_number_light'}>Page {page}</span>
                <button className={'clicker_button_light'} onClick={nextPage}>Next</button>
            </div>
        </div>
)
    ;
}