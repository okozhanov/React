import {useDispatch} from "react-redux";
import {deleteToDo} from "../../Redux/actions";

export default function ToDo({thisToDo, editToDo}) {

    let dispatch = useDispatch()

    let deleteButton = () => {
        dispatch(deleteToDo(thisToDo.id))
    }

    let editButton = () => {
        editToDo(thisToDo)
    }

    return (
    <div className={'todo'}>
        <h4>{thisToDo.todo} ({thisToDo.priority})</h4>
        <button onClick={deleteButton}>delete</button>
        <button onClick={editButton}>edit</button>
    </div>
  );
}