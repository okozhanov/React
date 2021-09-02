import {useDispatch} from "react-redux";
import {getUsers} from "../../services/users.services";
import {clearUsers, fetchUsers} from "../../Redux/actions";
import './UsersHideShow.css'

export default function UsersHideShow() {

    let dispatch = useDispatch()

    let clearThoseUsers = () => {
        dispatch(clearUsers())
    }

    let displayUsers = () => {
        getUsers().then(value =>
            dispatch(fetchUsers(value)))
    }

    return (
    <div>
        <h3>Control users</h3>

        <button className={'button_1'} onClick={clearThoseUsers}>
            CLEAR USERS
        </button>

        <button className={'button_2'} onClick={displayUsers}>
            DISPLAY USERS
        </button>
    </div>
  );
}