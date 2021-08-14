import './Post.css'

export default function Post({thisPost, usFunc}) {

    usFunc(thisPost.userId)

    return (
    <div className={'post'}>
      <h4>{thisPost.title}</h4>
      <p>{thisPost.body}</p>
    </div>
  );
}