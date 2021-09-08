import './MoviesListCard.css'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";
import {Stargazer} from "../../services/stargazer";
import {useEffect} from "react";
import {number, switcher_MoviesListCard} from "../../services/switchers";

export const link_img_w300 = 'https://image.tmdb.org/t/p/w300'

export default function MoviesListCard({thisMovie, mode}) {

    let stars = Stargazer(thisMovie.vote_average)

    // useEffect(() => {
    //     switcher_MoviesListCard()
    // }, [number])

    return (
        <div className={'movie_card_light'}>
            <Link to={{pathname: '/movies/' + thisMovie.id, state_1: thisMovie.id, state_2: stars}}>
                {thisMovie.poster_path && <img src={link_img_w300 + thisMovie.poster_path} alt="Poster"/>}
                <h3>{thisMovie.title}</h3>
                <h5>{thisMovie.release_date}</h5>
                {stars.yes_stars && stars.yes_stars.map((star, index) => <i key={index} className="fas fa-star"> </i>)}
                {stars.no_stars && stars.no_stars.map((star, index) => <i key={index} className="far fa-star"> </i>)}
            </Link>
        </div>
    );
}
