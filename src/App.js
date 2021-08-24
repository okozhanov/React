import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div className="App" id={'top'}>

                <div className={'links'}>
                    <Link id={'link_1'} to={'/users-page'}>Users</Link><br/>
                    <Link id={'link_2'} to={'/posts-page'}>Posts</Link><br/>
                    <Link id={'link_3'} to={'/comments-page'}>Comments</Link><br/>
                    <Link id={'link_4'} to={'/'}>Clear</Link>
                </div>

                <Route path={'/users-page'} render={() => {return <Users/>}}/>
                <Route path={'/posts-page'} render={() => {return <Posts/>}}/>
                <Route path={'/comments-page'} render={() => {return <Comments/>}}/>

            </div>
        </Router>
    );
}

export default App;
