import './Post.css'

export default function Post({thisPost, detailsOfPost}) {

    const details = () => {
        detailsOfPost(thisPost.id)
    }

    return (
    <div className={'post'}>
        <h4>{thisPost.title}</h4> <br/>

        <a href="#start"><button className={'post_button'} onClick={details}>
            details
        </button></a>
    </div>
  );
}