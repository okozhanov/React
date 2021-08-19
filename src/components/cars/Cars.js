import {getCars, postCars} from "../../services/car.api.services";
import './Cars.css'
import {useEffect, useState} from "react";
import Car from "../car/Car";

export default function Cars() {

    let submitedForm = (ev) => {
        ev.preventDefault()

        if (ev.target.model.value.length > 20) {
            window.alert('too long model (must not be longer than 20 characters)')
        } else {
            if (+ev.target.price.value < 0) {
                window.alert('enter correct price')
            } else {
                if (+ev.target.year.value < 1990 || +ev.target.year.value > 2021) {
                    window.alert('enter correct year (must not be less than 1990)')
                } else {
                    let newCar = {
                        model: ev.target.model.value,
                        price: ev.target.price.value,
                        year: ev.target.year.value
                    }
                    postCars(newCar)
                }
            }
        }

    };

    let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars(value.reverse()))
    }, [cars])

    return (
        <div className={'cars_block'}>
            <div className={'cars'}>
                {cars.map(thisCar => <Car key={thisCar.id} thisCar={thisCar}/>)}
            </div>
            <div className={'add_car'}>
                <h2>add a new car</h2>
                <form className={'save_car_form'} onSubmit={submitedForm}>
                    <input type="text" name={'model'} placeholder={'model'}/><br/>
                    <input type="text" name={'price'} placeholder={'price'}/><br/>
                    <input type="text" name={'year'} placeholder={'year'}/><br/>
                    <button className={'save_car_button'}>save</button>
                </form>
            </div>
        </div>
    );
}