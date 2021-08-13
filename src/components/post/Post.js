export default function Post({thisPost}) {
    return (
        <div>
            <h4>Post {thisPost.id}, by user {thisPost.userId}</h4>
            <h3>{thisPost.title}</h3>
            <p>{thisPost.body}</p>
        </div>
    );
}