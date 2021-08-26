
const url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
    return fetch(url).then(value => value.json())
}

const getUser = (userId) => {
    return fetch(url + '/' + userId).then(value => value.json())
}

export {getUsers, getUser}