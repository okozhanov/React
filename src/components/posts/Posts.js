import {useEffect, useState} from "react";
import Post from "../post/Post";
import {getPosts} from "../../services/post.services";

export default function Posts() {

    let [posts, setPost] = useState([])

    useEffect(() => {
        getPosts().then(value => setPost([...value]))
    }, [])

    return (
        <div>
            {
                posts.map(thisPost => <Post key={thisPost.id} thisPost={thisPost}/>)
            }
        </div>
    );
}