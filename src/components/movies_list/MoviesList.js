import {useEffect, useState} from "react";
import {getMovies} from "../../services/movies.services";
import MoviesListCard from "../movies_list_card/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../../Redux/actions";
import './MoviesList.css'

export default function MoviesList(props) {

    let {history} = props

    let movies = useSelector(state => state.movies)

    let dispatch = useDispatch()

    let [page, setPage] = useState(1)

    useEffect(() => {
        getMovies(page).then(value => dispatch(fetchMovies(value.results)))
    }, [dispatch, page])

    let previousPage = () => {
        if (page === 1) {
            return page
        } else if (page >= 1) {
            setPage(page -= 1)
        }
    }

    let nextPage = () => {
        setPage(page += 1)
    }

    return (
        <div className={'page'}>
            <div className={'movies_cards'}>
                {movies.map((thisMovie) => <MoviesListCard key={thisMovie.id} thisMovie={thisMovie} history={history}/>)}
            </div>
            <div>
                <button onClick={previousPage}>Previous</button>
                Page {page}
                <button onClick={nextPage}>Next</button>
            </div>

        </div>
  );
}