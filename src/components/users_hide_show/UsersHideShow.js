import {useDispatch} from "react-redux";
import {getUsers} from "../../services/users.services";
import {clearUsers, fetchUsers} from "../../Redux/actions";

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
        <button onClick={clearThoseUsers}>
            CLEAR USERS
        </button>

        <button onClick={displayUsers}>
            DISPLAY USERS
        </button>
    </div>
  );
}