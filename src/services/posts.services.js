
const url = 'https://jsonplaceholder.typicode.com/users'

const getPostsOfUser = (userId) => {
    return fetch(url + '/' + userId + '/' + 'posts').then(value => value.json())
}

export {getPostsOfUser}