const reducer = (state, action) => {

    let number = action.payload

    switch (action.type) {
        case '+' :
            return state += number
        case '-' :
            return state -= number
        default :
            return state
    }
}

export default reducer