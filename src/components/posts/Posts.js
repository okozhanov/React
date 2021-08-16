import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.services";
import Post from "../post/Post";
import './Posts.css'
import PostDetails from "../post_details/PostDetails";

export default function Posts() {

    let [posts, setPosts] = useState([])
    let [postDetails, setPostDetails] = useState(null)

    const detailsOfPost = (postId) => {
        setPostDetails(postId)
    }

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    return (
    <div className={'page'} id={'start'}>
        <div className={'posts'}>
            {posts.map(thisPost => <Post key={thisPost.id} thisPost={thisPost} detailsOfPost={detailsOfPost}/>)}
        </div>

        {postDetails && <div className={'current_post'}>
            {<PostDetails postDetails={posts[postDetails-1]}/>}
        </div>}
    </div>
  );
}

