import './address/Address'
import Address from "./address/Address";
import './User.css'

export default function User({
                                 id,
                                 name,
                                 email,
                                 street,
                                 suite,
                                 city,
                                 zipcode,
                                 lat,
                                 lng,
                                 phone,
                                 website,
                                 companyName,
                                 catchPhrase,
                                 bs
                             }) {
    return (
        <div className='user'>
            <h2>{name}, {id}</h2>
            <h4>{email}</h4>
            <Address strret={street} suite={suite} city={city} zipcode={zipcode} lat={lat} lng={lng}/>
            <p>{phone}<br/>{website}</p>
            <p>Company:<br/>
                {companyName}<br/>
                {catchPhrase}<br/>
                {bs}</p>
        </div>
    );
}