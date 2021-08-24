import './Comment.css'

export default function Comment({thisComment}) {
  return (
    <div className={'comment'}>
    <h4>{thisComment.name}</h4>
    <h5>{thisComment.email}</h5>
    <p>{thisComment.body}</p>

    </div>
  );
}