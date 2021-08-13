
const url = 'https://jsonplaceholder.typicode.com/posts'

const getCommentsOfPost = (postId) => {
    return fetch(url + '/' + postId + '/' + 'comments').then(value => value.json())
}

export {getCommentsOfPost}