import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";
import './Menu.css'

let switcher = () => {
    let myApp = document.getElementsByClassName('App')[0]
    myApp.classList.toggle('light_mode')
}

export default function Menu() {
    return (
        <div className={'menu'}>
            <button onClick={switcher}>switch</button>
            <Link id={'films_link'} to={'/movies'}>
                <p>Movies</p>
            </Link>
            <Link id={'genres_link'} to={'/genres'}>
                <p>Genres</p>
            </Link>
        </div>
    );
}