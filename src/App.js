import './App.css';
import MoviesList from "./components/movies_list/MoviesList";
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    // Link,
    // withRouter
} from "react-router-dom";
import Menu from "./components/menu/Menu";
import MovieDetails from "./components/movie_details/MovieDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <img id={'background'}
                    src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="background"/>
                <Menu/>
                <Route exact path={'/movies'} component={MoviesList}/>
                <Route path={'/movies/:id'} component={MovieDetails}/>
            </div>
        </Router>
    );
}

export default App;
