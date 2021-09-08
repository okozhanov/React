import {useEffect, useState} from "react";
import {getMovies} from "../../services/movies.services";
import MoviesListCard from "../movies_list_card/MoviesListCard";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../../Redux/actions";
import './MoviesList.css'
import {/*number, */switcher_MoviesList} from "../../services/switchers";


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

    // useEffect(() => {
    //     switcher_MoviesList()
    // }, [number])

    return (
        <div className={'page'} id={'top'}>
            <h1 className={'header_light'}>The Movies Data Base</h1>
            <p className={'label_light'}>Your best movie experience</p>
            <div className={'movies_cards'}>
                {movies.map((thisMovie) => <MoviesListCard key={thisMovie.id} thisMovie={thisMovie}/>)}
            </div>
            <div className={'page_clicker_light'}>
                <a href="#top"><button className={'clicker_button_light'} onClick={previousPage}>Previous</button></a>
                <span className={'page_number_light'}>Page {page}</span>
                <a href="#top"><button className={'clicker_button_light'} onClick={nextPage}>Next</button></a>
            </div>

        </div>
  );
}