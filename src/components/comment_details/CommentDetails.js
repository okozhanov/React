import './CommentDetails.css'

export default function CommentDetails({commentDetails}) {
  return (
      <div className={'comment_details'}>
          <p><span className={'number_first'}>{commentDetails.id}</span>
              <span className={'number_second'}>{commentDetails.id}</span></p>
          <h2>{commentDetails.name}</h2>
          <p><i>(by user {commentDetails.email})</i></p>
          <p>{commentDetails.body}</p>
      </div>
  );
}