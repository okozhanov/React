import "./Address.js"
import Address from "../address/Address";

export default function User({
                                 id,
                                 name,
                                 username,
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
        <div>
            <h2>{name}, {id}</h2>
            <h3>({username})</h3>
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