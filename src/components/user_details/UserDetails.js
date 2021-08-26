import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/users.api.services";

export default function UserDetails() {

    let {id: userId} = useParams('id')

    let [thisUser, setThisUser] = useState({})

    useEffect(() => {
        getUser(userId).then(value => setThisUser({...value}))
    }, [userId])

    return (
        <div className={'user_details'}>
            <h2>{thisUser.id} {thisUser.name}</h2>
            <h3>({thisUser.username})</h3>
            <h5>{thisUser.email}</h5>
            <p>{thisUser.phone}<br/>{thisUser.website}</p>
        </div>
    );
}