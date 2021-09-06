import './MovieDetails.css'
import {getDetails} from "../../services/movies.services";
import {fetchDetails} from "../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

export default function MovieDetails({history}) {

    const link_img_w500 = 'https://image.tmdb.org/t/p/w500'

    let filmId = history.location.state_1

    console.log(filmId);

    let details = useSelector(state => state.details)

    let dispatch = useDispatch()

    useEffect(() => {
        getDetails(filmId).then(value => dispatch(fetchDetails(value)))
    }, [dispatch, filmId])

    console.log(details);

    return (
        <div className={'movie'}>
            <h1>{details.title}</h1>

            <div className={'movie_details'}>

                <div className={'title_image'}>
                    <img src={link_img_w500 + details.backdrop_path} alt="title_image"/>
                </div>

                <div className={'movie_info'}>
                    <h3>{details.tagline}</h3>
                    <h4>genres: {details.genres.map(genre => <span className={'genre'}><i
                        className="far fa-circle"> </i>{genre.name}</span>)}</h4>
                    <h5>released: {details.release_date}</h5>
                    <h5>runtime: {details.runtime} min</h5>
                    <h5>languages: {details.spoken_languages.map(language => <span className={'language'}><i
                        className="far fa-circle"> </i>{language.name}</span>)}</h5>
                    <h5>countries: {details.production_countries.map(countrie => <span className={'countrie'}><i
                        className="far fa-circle"> </i>{countrie.name}</span>)}</h5>
                </div>

            </div>

            <div className={'overview'}>
                <h3>Owerview</h3>
                <p>{details.overview}</p>
            </div>

        </div>
    );
}