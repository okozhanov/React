import './User.css'

export default function User({thisUser, postsFunction}) {

    const postsDisplay = () => {
        postsFunction(thisUser.id)
     }

    return (
        <div className={'user'}>
            <h2><span className={'user_number'}>
                {thisUser.id}
            </span>
                <span className={'user_name'}>
                     {thisUser.name}
                </span></h2>
            <button className={'user_button'} onClick={postsDisplay}>
                show posts
            </button>
        </div>
    );
}