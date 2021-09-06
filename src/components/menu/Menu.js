import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";
import './Menu.css'

export default function Menu() {
    return (
        <div className={'menu'}>
            <Link id={'films_link'} to={'/movies'}>
                <h2>Films</h2>
            </Link>
            <Link id={'genres_link'} to={'/genres'}>
                <h2>Genres</h2>
            </Link>
        </div>
    );
}