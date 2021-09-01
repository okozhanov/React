import {useState} from "react";
import {setUser} from "../../services/users.services";
import {useDispatch} from "react-redux";
import {addUser} from "../../Redux/actions";

export default function UsersAdd() {

    let dispatch = useDispatch()

    let [currentUser, setCurrentUser] = useState({name: 'name', username: 'username', email: 'email'})

    let changingUserForm = (ev) => {
        setCurrentUser({...currentUser, [ev.target.name]: ev.target.value})
    }

    let addCurrentUser = (ev) => {
        ev.preventDefault()
        setUser(currentUser).then(value => dispatch(addUser(currentUser)))}

    return (
        <div>

            <form onSubmit={addCurrentUser}>
                <input type="text" name={'name'} onChange={changingUserForm} value={currentUser.name}/>
                <input type="text" name={'username'} onChange={changingUserForm} value={currentUser.username}/>
                <input type="text" name={'email'} onChange={changingUserForm} value={currentUser.email}/>
                <button type={"submit"}>save</button>
            </form>

        </div>
    );
}