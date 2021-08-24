import './Post.css'

export default function Post({thisPost}) {
  return (
    <div className={'post'}>
        <h3>{thisPost.title}</h3>
        <p>{thisPost.body}</p>
    </div>
  );
}