import './PostDetails.css'

export default function PostDetails({postDetails}) {
  return (
    <div className={'post_details'}>
        <p><span className={'number_first'}>{postDetails.id}</span>
            <span className={'number_second'}>{postDetails.id}</span></p>
        <h2>{postDetails.title}</h2>
        <p className={'by_user'}><i>(by user {postDetails.userId})</i></p>
        <p className={'post_body'}>{postDetails.body}</p>
    </div>
  );
}