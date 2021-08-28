const reducer = (state, action) => {

    switch (action.type_1) {
        case 'a' :
            if (action.type_2 === '+') {
                return {...state, a: state.a ++}
            } else {
                return {...state, a: state.a--}
            }

        case 'b' :
            if (action.type_2 === '+') {
                return {...state, b: state.b++}
            } else {
                return {...state, b: state.b--}
            }
        case 'c' :
            if (action.type_2 === '+') {
                return {...state, c: state.c++}
            } else {
                return {...state, c: state.c--}
            }
        default :
            return 0
    }

}

export default reducer