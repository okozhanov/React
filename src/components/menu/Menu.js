import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // withRouter
} from "react-router-dom";
import './Menu.css'
import {switcher_menu} from "../../services/switchers";


export default function Menu() {
    return (
        <div className={'menu'}>
            <button className={'switcher'} onClick={switcher_menu}>switch</button>
            <Link to={'/movies'}>
                <p className={'menu_element'}>Movies</p>
            </Link>
            <Link to={'/genres'}>
                <p className={'menu_element'}>Genres</p>
            </Link>
        </div>
    );
}