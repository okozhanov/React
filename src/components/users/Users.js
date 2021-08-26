import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api.services";
import User from "../user/User";
import {Route} from "react-router-dom";
// import UserDetailsStatic from "../user_details_static/UserDetailsStatic";
import UserDetails from "../user_details/UserDetails";
import './Users.css'

export default function Users(props) {

    let {match: {url}, history} = props

    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={'users_block'}>
            <div className={'users'}>
                {users.map(thisUser => <User key={thisUser.id} history={history} thisUser={thisUser} url={url}/>)}
            </div>
            {/*<Route path={`${url}/:id`} render={(props) => {*/}
            {/*    return <UserDetailsStatic {...props}/>*/}
            {/*}}/>*/}

            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props}/>
            }}/>
        </div>
    );
}