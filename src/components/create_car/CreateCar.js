import {useState} from "react";
import {postCar} from "../../services/car.api.services";
import './CreateCar.css'

export default function CreateCar() {

    let onFormSubmit = (ev) => {
        ev.preventDefault()

        if (formState.model.length > 20 || formState.model.includes(' ')) {
            window.alert('wrong model (not than 20 characters and only one word)')
        } else {
            if (+formState.price < 0) {
                window.alert('enter correct price')
            } else {
                if (+formState.year < 1990 || +formState.year > 2021) {
                    window.alert('enter correct year (must not be less than 1990)')
                } else {
                    postCar(formState)
                }
            }
        }
    }

    let [formState, setFormState] = useState({model: '', target: '', price: ''})

    let onFormChange = (ev) => {
        setFormState({...formState, [ev.target.name]: ev.target.value})
    }

    return (
        <div>
            <form onSubmit={onFormSubmit} className={'create_form'}>
                <input
                    type="text"
                    name={'model'}
                    value={formState.model}
                    placeholder={'model'}
                    onChange={onFormChange}/>
                <input
                    type="text"
                    name={'price'}
                    value={formState.price}
                    placeholder={'price'}
                    onChange={onFormChange}/>
                <input
                    type="text"
                    name={'year'}
                    value={formState.year}
                    placeholder={'year'}
                    onChange={onFormChange}/>
                <button type={'submit'}>create</button>
            </form>

        </div>
    );
}