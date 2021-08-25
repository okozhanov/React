import './Car.css'

export default function Car({thisCar}) {
  return (
    <div className={'car'}>
    <h3>{thisCar.model}</h3>
    <h4>{thisCar.year}</h4>
    <h4>{thisCar.price}</h4>
    </div>
  );
}