import Comments from "../comments/Comments";
import './Post.css'

export default function Post({thisPost}) {
    return (
        <div className='post'>
            <h3>{thisPost.id} {thisPost.title}</h3>
            <p>{thisPost.body}</p>
            <Comments postId={thisPost.id}/>
        </div>
    );
}