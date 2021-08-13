export default function Comment({thisComment}) {
  return (
    <div>
        <h5>Comment {thisComment.id} of the post {thisComment.postId}</h5>
        <h6>from the user {thisComment.email}</h6>
        <h4>{thisComment.name}</h4>
        <p>{thisComment.body}</p>
    </div>
  );
}