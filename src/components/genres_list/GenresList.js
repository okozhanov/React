import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getGenres} from "../../services/genres.services";
import {fetchGenres} from "../../Redux/actions";
import './GenresList.css'
import {
    // BrowserRouter as Router,
    // Switch,
    Route,
    Link,
    // withRouter
} from "react-router-dom";
import GenresMovies from "../genres_movies/GenresMovies";
import MovieDetails from "../movie_details/MovieDetails";

export default function GenresList() {

    let genres = useSelector(state => state.genres)

    let dispatch = useDispatch()

    useEffect(() => {
        getGenres().then(value => dispatch(fetchGenres(value.genres)))
    }, [dispatch])

    return (
        <div className={'page_genres'}>

            <div className={'genres'}>
                {genres.map(thisGenre => <Link key={thisGenre.id} className={'genre_item'} to={{
                    pathname: '/genres/' + thisGenre.name,
                    state_1: thisGenre.id,
                    state_2: thisGenre.name
                }}>{thisGenre.name}</Link>)}
            </div>

            <div>
                <Route exact path={'/genres/:name'} component={GenresMovies}/>
                <Route path={'/genres/:name/:id'} component={MovieDetails}/>
            </div>
        </div>
    );
}