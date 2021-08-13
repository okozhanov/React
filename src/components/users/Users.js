import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import User from "../user/User";


export default function () {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

  return (
    <div className='users'>
        {
            users.map(thisUser => <User key={thisUser.id} thisUser={thisUser}/>)
        }
    </div>
  );
}