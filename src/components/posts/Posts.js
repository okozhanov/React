import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/posts.services";
import Post from "../post/Post";
import './Posts.css'

export default function Posts({userId}) {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPostsOfUser(userId).then(value => setPosts([...value]))
    }, [])

  return (
    <div className='posts'>
        {
            posts.map(thisPost => <Post key={thisPost.id} thisPost={thisPost}/>)
        }
    </div>
  );
}