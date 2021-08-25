const url = 'http://91.201.233.14/api/v1/cars'

const getCars = () => {
    return fetch(url).then(value => value.json())
}

const getCar = (carId) => {
    return fetch(url+ '/' + carId).then(value => value.json())
}

const postCar = (car) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset = UTF-8'
        }
    })
        .then(value => value.json())
        .then(json => console.log(json))
}

const updateCar = (car, carId) => {
    fetch(url + '/' + carId, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset = UTF-8'
        }
    })
        .then(value => value.json())
        .then(json => console.log(json))
}

export {getCars, getCar, postCar, updateCar}