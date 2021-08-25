import './App.css';
import {
    BrowserRouter as Router,
    // Switch,
    Route,
    Link,
    // withRouter
} from "react-router-dom";
import Cars from "./components/cars/Cars";
import CreateCar from "./components/create_car/CreateCar";
import UpdateCar from "./components/update_car/UpdateCar";

function App() {
    return (
        <Router>
            <div className="App">

                <div className={'links'}>
                    <Link className={'link'} id={'link_1'} to={'/cars'}><span className={'first_word'}>Show</span>
                        <span className={'second_word'}>cars</span></Link>
                    <Link className={'link'} id={'link_2'} to={'/create-cars'}><span className={'first_word'}>Create</span>
                        <span className={'second_word'}>car</span></Link>
                    <Link className={'link'} id={'link_3'} to={'/update-cars'}><span className={'first_word'}>Update</span>
                        <span className={'second_word'}>car</span></Link>
                    <Link className={'link'} id={'link_4'} to={'/'}><span className={'first_word'}>Clear</span>
                        <span className={'second_word'}>space</span></Link>
                </div>

                <Route path={'/cars'} render={() => {
                    return <Cars/>
                }}/>
                <Route path={'/create-cars'} render={() => {
                    return <CreateCar/>
                }}/>
                <Route path={'/update-cars'} render={() => {
                    return <UpdateCar/>
                }}/>
            </div>
        </Router>
    );
}

export default App;
