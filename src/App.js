import './App.css';
import {useReducer} from "react";
import reducer from "./reducers/reducer";

function App() {

    let [state, dispatch] = useReducer(reducer, 0)

    let plus10 = () => {
        dispatch({type: '+', payload: 10})
    };

    let minus2 = () => {
        dispatch({type: '-', payload: 2})
    };

    return (
    <div className="App">
        <h1>{state}</h1>
        <button className={'button_1'} onClick={plus10}>plus 10</button><br/>
        <button className={'button_2'} onClick={minus2}>minus 2</button>
    </div>
  );
}

export default App;
