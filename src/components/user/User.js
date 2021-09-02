import './User.css'

export default function User({thisUser}) {
    return (
    <div className={'user'}>
        <h3>{thisUser.name}</h3>
        <h5> username: {thisUser.username}</h5>
        <h5> email: {thisUser.email}</h5>
    </div>
  );
}