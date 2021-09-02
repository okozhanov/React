import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import ToDo from "../to_do/ToDo";
import {addToDo, deleteToDo} from "../../Redux/actions";
import './AllToDo.css'

export default function AllToDo() {

    let dispatch = useDispatch()

    let state = useSelector(state => state)

    let [i, setI] = useState(1)

    let addingToDo = (ev) => {
        ev.preventDefault()
        let newToDo = {id: i, todo: ev.target.todo.value, priority: ev.target.priority.value}
        dispatch(addToDo(newToDo))
        setI(i += 1)
        console.log(newToDo);
    }

    let [currentToDo, setCurrentToDo] = useState({id: '', todo: '', priority: ''})

    let typingToDo = (ev) => {
        setCurrentToDo({...currentToDo, [ev.target.name]: ev.target.value})
    }

    let editToDo = (toDoForEdit) => {
        setCurrentToDo(toDoForEdit)
        dispatch(deleteToDo(toDoForEdit.id))
    }

    return (
        <div className={'page'}>
            <div className={'adding_form'}>
                <h3>enter your to do</h3>
                <form onSubmit={addingToDo}>
                    <input type="text" name={'todo'} onChange={typingToDo} value={currentToDo.todo} placeholder={'to do'}/>
                    <input type="text" name={'priority'} onChange={typingToDo} value={currentToDo.priority} placeholder={'priority'}/><br/>
                    <button type={"submit"}>save</button>
                </form>
            </div>
            <div className={'all_todo'}>
                <h3>to do list</h3>
                {state.map((thisToDo) => <ToDo key={thisToDo.id} thisToDo={thisToDo} editToDo={editToDo}/>)}
            </div>
        </div>
    );
}