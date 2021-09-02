
export const addToDo = (newToDo) => {
    return {type: 'ADD_TO_DO', payload: newToDo}
}

export const deleteToDo = (id) => {
    return {type: 'DELETE_TO_DO', payload: id}
}