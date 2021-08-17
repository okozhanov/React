import './Comment.css'

export default function Comment({thisComment, getCommentId}) {

  const details = () => {
      getCommentId(thisComment.id)
  }

  return (
      <div className={'comment'}>
          <h4>{thisComment.name}</h4> <br/>

          <a href="#start"><button className={'comment_button'} onClick={details}>
              details
          </button></a>
    </div>
  );
}