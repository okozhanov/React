import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.services";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            {
                users.map(thisUser => <User key={thisUser.id} thisUser={thisUser}/>)
            }
        </div>
    );
}