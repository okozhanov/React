import Comments from "../comments/Comments";

export default function Post({thisPost}) {
    return (
        <div className='post'>
            <h3>{thisPost.title}</h3>
            <Comments postId={thisPost.id}/>
        </div>
    );
}