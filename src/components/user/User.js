import Posts from "../posts/Posts";

export default function User({thisUser}) {
    return (
        <div className='user'>
            <h2>{thisUser.name}</h2>
            Posts:
            <Posts userId={thisUser.id}/>
        </div>
    );
}