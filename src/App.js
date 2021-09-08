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
import GenresList from "./components/genres_list/GenresList";

function App() {
    return (
        <Router>
            <div className="App">
                <Menu/>
                <Route exact path={'/movies'} component={MoviesList}/>
                <Route path={'/movies/:id'} component={MovieDetails}/>
                <Route path={'/genres'} component={GenresList}/>
            </div>
        </Router>
    );
}

export default App;
