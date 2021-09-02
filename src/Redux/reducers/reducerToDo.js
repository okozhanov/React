export let reducerToDo = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TO_DO' :
            return [...state, action.payload]
        case 'DELETE_TO_DO' :
            return state.filter(state => state.id !== action.payload)
        default :
            return state
    }
}

