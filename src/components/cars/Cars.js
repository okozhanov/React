import {useEffect, useState} from "react";
import {getCars} from "../../services/car.api.services";
import Car from "../car/Car";
import './Cars.css'

export default function Cars() {

    let [cars, setCars] = useState([])
    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    return (
    <div className={'cars'}>
        {cars.map(thisCar => <Car key={thisCar.id} thisCar={thisCar}/>)}
    </div>
  );
}