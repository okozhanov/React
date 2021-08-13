import Posts from "../posts/Posts";
import './User.css'

export default function User({thisUser}) {
    return (
        <div className='user'>
            <h2>{thisUser.username}, {thisUser.id}</h2>
            <h3>({thisUser.name})</h3>
            <h4>{thisUser.email}</h4>
            Posts:
            <Posts userId={thisUser.id}/>
        </div>
    );
}
