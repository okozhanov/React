import "./Geo.js"
import Geo from "../geo/Geo";


export default function Address({street, suite, city, zipcode, lat, lng}) {
    return (
        <div>
            <p>
                Address:<br/>
                {city}, {street}, {suite}
            </p>
            <p>
                zipcode: {zipcode}
            </p>
            <Geo lat={lat} lng={lng}/>
        </div>
    );
}