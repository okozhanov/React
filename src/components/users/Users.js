import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.services";
import User from "../user/User";
import './Users.css'
import {getPostsOfUser} from "../../services/posts.services";
import Post from "../post/Post";


export default function Users() {

    let [users, setUsers] = useState([])
    let [posts, setPosts] = useState(null)

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const postsFunction = (userId) => {
        getPostsOfUser(userId).then(value => setPosts([...value]))
    }

    let [thisUserId, setThisUserId] = useState('')

    const usFunc = (usId) => {
        setThisUserId(usId)
    }

    return (
        <div className='page'>
            <div className='users'>
                {
                    users.map(thisUser => <User
                        key={thisUser.id}
                        thisUser={thisUser}
                        postsFunction={postsFunction}
                    />)
                }
            </div>

            {posts && <div className='posts'>
                <h2 className={'this_user_id'}>{thisUserId}</h2>
                {
                    posts.map(thisPost => <Post key={thisPost.id} thisPost={thisPost} usFunc={usFunc}/>)
                }
            </div>}
        </div>
    );
}
