
const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

const getUser = async (id) => {

    if (+id <0) {
        throw new Error('wrong id')
    }
    return await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json())
}

export {getUsers, getUser}