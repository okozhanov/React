import './Comment.css'

export default function Comment({thisComment}) {
  return (
    <div className='comment'>
        Comment:
        <h5>{thisComment.name}</h5>
        <h6>from the {thisComment.email}</h6>
        <p>{thisComment.body}</p>
    </div>
  );
}