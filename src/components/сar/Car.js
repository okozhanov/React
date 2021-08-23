import {deleteCar} from "../../services/cars.services";
import './Car.css'

export default function Car({thisCar, editCar}) {

    const deleteThisCar = () => {
        deleteCar(thisCar.id)
        window.location.reload()
    }

    const editThisCar = () => {
        editCar(thisCar)
    }

    return (
        <div className={'car'}>
            <h3>{thisCar.model}</h3>
            <h4>{thisCar.price} USD</h4>
            <h4>{thisCar.year}</h4>

            <button type={"submit"} onClick={editThisCar}>
                edit
            </button>
            <button type={"submit"} onClick={deleteThisCar}>
                delete
            </button>

        </div>
    );
}
