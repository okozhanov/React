import './Car.css'

export default function Car({thisCar}) {
    return (
        <div className={'car'}>
            <h4>{thisCar.model}</h4>
            <p>({thisCar.id})</p>
            <h5>year: {thisCar.year}</h5>
            <h5>price: {thisCar.price}</h5>
        </div>
    );
}