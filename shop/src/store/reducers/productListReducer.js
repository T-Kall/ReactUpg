import actiontypes from '../actiontypes'

const initState = []

export default (state = initState, action) => {
    switch(action.type) {

        case actiontypes().products.set: //från actions/products (och actiontypes)
            //state = action.payload
            state.products = action.payload.products 
            return state

        default:
            return state
    }
}


