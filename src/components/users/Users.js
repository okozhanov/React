import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.services";
import User from "../user/User";
import './Users.css'

export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
    <div className={'users'}>
        {users.map(thisUser => <User key={thisUser.id} thisUser={thisUser}/>)}
    </div>
  );
}