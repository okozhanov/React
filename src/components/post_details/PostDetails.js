import './PostDetails.css'

export default function PostDetails({postDetails}) {
  return (
    <div className={'post_details'}>
        <p><span className={'number_first'}>{postDetails.id}</span>
            <span className={'number_second'}>{postDetails.id}</span></p>
        <h2>{postDetails.title}</h2>
        <p><i>(by user {postDetails.userId})</i></p>
        <p>{postDetails.body}</p>
    </div>
  );
}