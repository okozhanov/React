import {getCar, getCars, updateCar} from "../../services/car.api.services";
import {useEffect, useState} from "react";
import './UpdateCar.css'

export default function UpdateCar() {

    let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [cars])

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
                    updateCar(formState, formState.id)
                }
            }
        }
    }

    let [formState, setFormState] = useState({model: '', target: '', price: ''})

    let onFormChange = (ev) => {
        setFormState({...formState, [ev.target.name]: ev.target.value})
    }

    let onSelectChange = (ev) => {
        getCar(ev.target.value).then(value => setFormState({...value}))
    }



    return (
       <div className={'page'}>

           <div>
               <form className={'select_form'} onChange={onSelectChange}>
                   <label htmlFor="cars">Select a car</label>
                   <select name="cars" id="cars">
                   {cars.map(thisCar =>
                       <option value={thisCar.id}>{thisCar.model}</option>)
                   }
                   </select>
               </form>
           </div>

           <div>
               <form className={'edit_form'} onSubmit={onFormSubmit}>
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
                   <button type={'submit'}>update</button>
               </form>

           </div>
       </div>
    );
}