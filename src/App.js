import './App.css';
import {useReducer} from "react";
import reducer from "./reducers/reducer";

function App() {

    let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0})

    let a_plus = () => {
        dispatch({type_1: 'a', type_2: '+'})
    };

    let a_minus = () => {
        dispatch({type_1: 'a', type_2: '-'})
    };

    let b_plus = () => {
        dispatch({type_1: 'b', type_2: '+'})
    };

    let b_minus = () => {
        dispatch({type_1: 'b', type_2: '-'})
    };

    let c_plus = () => {
        dispatch({type_1: 'c', type_2: '+'})
    };

    let c_minus = () => {
        dispatch({type_1: 'c', type_2: '-'})
    };
    return (
        <div className="App">

            <div className={'a'}>
                <h2>{a}</h2>
                <button className={'button_plus'} onClick={a_plus}>plus</button>
                <button className={'button_minus'} onClick={a_minus}>minus</button>
            </div>

            <div className={'b'}>
                <h2>{b}</h2>
                <button className={'button_plus'} onClick={b_plus}>plus</button>
                <button className={'button_minus'} onClick={b_minus}>minus</button>
            </div>

            <div className={'c'}>
                <h2>{c}</h2>
                <button className={'button_plus'} onClick={c_plus}>plus</button>
                <button className={'button_minus'} onClick={c_minus}>minus</button>
            </div>

        </div>
    );
}

export default App;
