import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../services/users.services";
import User from "../user/User";
import {fetchUsers} from "../../Redux/actions";


export default function Users() {

    let state = useSelector(state => {
        let {reducerUsers} = state
        return reducerUsers
    })
    let {users} = state
    console.log(state);
    let dispatch = useDispatch()

    useEffect(() => {
        getUsers().then(value => {
            dispatch(fetchUsers(value))
        })
    }, [dispatch])

    return (
    <div>
        {users.map((thisUser, index) => <User key={index} thisUser={thisUser}/>)}
    </div>
  );
}