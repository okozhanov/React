import {useEffect, useState} from "react";
import {getCars, postCar, updateCar} from "../../services/cars.services";
import Car from "../сar/Car";
import './Cars.css'

export default function Cars() {



    let carSubmitted = (ev) => {

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
                    if (carForEdit === null) {
                        postCar(newCar)
                    } else {
                        updateCar(newCar, carForEdit.id)
                    }
                }
            }
        }
    };

    let [carForEdit, setCarForEdit] = useState(null)

    let [cars, setCars] = useState([])

    let [model, setModel] = useState('model')

    let [price, setPrice] = useState('price')

    let [year, setYear] = useState('year')

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])

    let onModelChange = (ev) => {
        setModel(ev.target.value)
    }

    let onPriceChange = (ev) => {
        setPrice(ev.target.value)
    }

    let onYearChange = (ev) => {
        setYear(ev.target.value)
    }

    let editCar = (editThisCar) => {
        setCarForEdit({...editThisCar})
        setModel(editThisCar.model)
        setPrice(editThisCar.price)
        setYear(editThisCar.year)
    }

    return (
    <div className={'cars_block'}>
        <div className={'cars_form'}>
            <form onSubmit={carSubmitted}>
                <input type="text" name={'model'} value={model} onChange={onModelChange}/>
                <input type="text" name={'price'}  value={price} onChange={onPriceChange}/>
                <input type="text" name={'year'} value={year} onChange={onYearChange}/>
                <button type='submit'>save</button>
            </form>
        </div>
        <div className={'cars'}>
            {cars.map(thisCar => <Car key={thisCar.id} thisCar={thisCar} editCar={editCar}/>)}
        </div>
    </div>
  );
}