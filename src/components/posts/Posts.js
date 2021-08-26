import {
    // BrowserRouter as Router,
    // Switch,
    Route,
    // Link,
    // withRouter
} from "react-router-dom";

import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.api.services";
import Post from "../post/Post";
import PostDetailsStatic from "../post_details_static/PostDetailsStatic";
import './Posts.css'

export default function Posts(props) {

    let {match: {url}} = props

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

  return (
    <div className={'posts_block'}>
        <div className={'posts'}>
            {posts.map(thisPost => <Post key={thisPost.id} thisPost={thisPost} url={url}/>)}
        </div>

        <Route path={`${url}/:id`} render={(props) => {
        return <PostDetailsStatic {...props}/>
        }}/>
    </div>
  );
}