import './App.css';
import Users from "./components/users/Users";
import UsersAdd from "./components/users_add/UsersAdd";
import UsersHideShow from "./components/users_hide_show/UsersHideShow";
import Posts from "./components/posts/Posts";

function App() {


    return (
        <div className="App">
            <div className={'users_block'}>
                <UsersHideShow/>
                <UsersAdd/>
                <Users/>
            </div>

            <div>
                <Posts/>
            </div>
        </div>
    );
}

export default App;
