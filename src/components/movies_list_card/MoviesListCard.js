import './MoviesListCard.css'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";

export default function MoviesListCard({thisMovie}) {

    const link_img_w300= 'https://image.tmdb.org/t/p/w300'

    return (
        <div className={'movie_card'}>
            <Link to={{pathname: '/movies/' + thisMovie.id, state_1: thisMovie.id}}>
                <img src={link_img_w300+thisMovie.poster_path} alt="Poster"/>
                <h3>{thisMovie.title}</h3>
                <h5>{thisMovie.release_date}</h5>
                <i className="fas fa-star">{thisMovie.vote_average}/10</i><br/>
            </Link>
        </div>
    );
}