import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    // Link, useHistory,
    // withRouter
} from "react-router-dom";
import './User.css'

export default function User({thisUser, url, history}) {

    // history = useHistory()

    let userDetailsButton = () => {
        history.push(url + '/' + thisUser.id)
    }

    return (
        <div className={'user'}>
            <button onClick={userDetailsButton}>details</button>
            {/*<Link to={{pathname: `${url}/${thisUser.id}`, state: thisUser}}>details</Link>*/}
            {/*<Link to={{pathname: `${url}/${thisUser.id}`}}>details</Link>*/}
            <span className={'username'}>{thisUser.name}</span>
        </div>
    );
}