import {ADD_USER, CLEAR_USERS, FETCH_USERS} from "../actions";


const reducerUsers = (state = {users: []}, action) => {

    switch (action.type) {
        case FETCH_USERS :
            return {...state, users: action.payload}
        case CLEAR_USERS :
            return {...state, users: []}
        case ADD_USER :
            return {...state, users: [...state.users, action.payload]}
        default :
            return state
    }


}

export {reducerUsers}

