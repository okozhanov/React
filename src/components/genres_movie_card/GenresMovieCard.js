import {Link} from "react-router-dom";
import {link_img_w300} from "../movies_list_card/MoviesListCard";
import './GenresMovieCard.css'
import {Stargazer} from "../../services/stargazer";

export default function GenresMovieCard({thisMovie, genre}) {

    let stars = Stargazer(thisMovie.vote_average)

    return (
        <div className={'movie_card_light'}>
            <Link to={{pathname: '/genres/' + genre + '/' + thisMovie.id, state_1: thisMovie.id, state_2: stars}}>
                {thisMovie.poster_path && <img src={link_img_w300 + thisMovie.poster_path} alt="Poster"/>}
                <h3>{thisMovie.title}</h3>
                <h5>{thisMovie.release_date}</h5>
                {stars.yes_stars && stars.yes_stars.map((star, index) => <i key={index} className="fas fa-star"> </i>)}
                {stars.no_stars && stars.no_stars.map((star, index) => <i key={index} className="far fa-star"> </i>)}
            </Link>
        </div>
    );
}