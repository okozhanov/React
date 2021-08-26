import './App.css';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link,
    // withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
// import UserDetailsStatic from "./components/user_details_static/UserDetailsStatic";
import Posts from "./components/posts/Posts";


function App() {
    return (
        <Router>
            <div className="App">

                <div className={'links'}>
                    <Link className={'users_link'} to={'/users'}>Show users</Link>
                    <Link className={'posts_link'} to={'/posts'}>Show posts</Link>
                </div>
                <Link className={'clear_link'} to={'/'}>Show nothing</Link>

                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} component={Posts}/>

            </div>
        </Router>
    );
}

export default App;
