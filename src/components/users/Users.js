import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.services";

export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    let userFormSubmitted = (ev) => {
        console.log(ev);
        ev.preventDefault()
    }

    return (
        <div>
            <div>
                <form onSubmit={userFormSubmitted}>
                    <label htmlFor="users">Choose a user:</label>
                    <select name="users" id="users">
                        {users.map(thisUser => <option value={thisUser.name}>{thisUser.name}</option>)}
                    </select>
                    <button type={'submit'}>get</button>
                </form>
            </div>
            <div>

            </div>
        </div>
    );
}