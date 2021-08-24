import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.services";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    return (
    <div className={'posts'}>
        {posts.map(thisPost => <Post key={thisPost.id} thisPost={thisPost}/>)}
    </div>
  );
}