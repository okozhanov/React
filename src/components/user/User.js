import './User.css'

export default function User({thisUser}) {
    return (
        <div className={'user'}>
            <h2>{thisUser.id} {thisUser.name}</h2>
            <h3>({thisUser.username})</h3>
            <h5>{thisUser.email}</h5>
            <p>
                Address:<br/>
                {thisUser.address.street}, {thisUser.address.suite}? {thisUser.address.zipcode}<br/>
                Geo:<br/>
                {thisUser.address.geo.lat}, {thisUser.address.geo.lng}
            </p>
            <p>
                {thisUser.phone}, {thisUser.website}<br/>
                                Company:<br/>
                {thisUser.company.name}, {thisUser.company.catchPhrase}, {thisUser.company.bs}
            </p>
        </div>
    );
}