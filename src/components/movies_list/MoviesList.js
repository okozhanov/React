import {useEffect, useState} from "react";
import {getMovies} from "../../services/movies.services";
import MoviesListCard from "../movies_list_card/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../../Redux/actions";
import './MoviesList.css'


export default function MoviesList(/*props*/) {

    // let {history} = props
    // history={history}

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

        if (page === 1000) {
            return page
        } else if (page <= 1000) {
            setPage(page += 1)
        }
    }


    return (
        <div className={'page'} id={'top'}>
            <h1>The Movies Data Base</h1>
            <p className={'label'}>Your best movie experience</p>
            <div className={'movies_cards'}>
                {movies.map((thisMovie) => <MoviesListCard key={thisMovie.id} thisMovie={thisMovie}/>)}
            </div>
            <div className={'movies_page_clicker'}>
                <a href="#top"><button onClick={previousPage}>Previous</button></a>
                <span className={'page_number'}>Page {page}</span>
                <a href="#top"><button onClick={nextPage}>Next</button></a>
            </div>

        </div>
  );
}