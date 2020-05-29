import actiontypes from '../actiontypes'
//import { v4 as uuidv4 } from 'uuid'


const initState = {
products: [],
product: {}
}

export default (state = initState, action) => {
    switch(action.type) {

        case actiontypes().products.set:
            state = action.payload
            return state

        case actiontypes().product.set:
            state = [...state, action.payload]
            return state

        default:
            return state
    }
}


//BÅDA I SAMMA


// //export default (state = [], action) => {

// export default (state = initState, action) => {
//     switch (action.type) {
//         case actiontypes().products.add:
//             return state = [...state, action.product]

//         case actiontypes().products.delete:
//             return state = state.filter(product => product.id !== action.id )

//         default:
//             return state
//     }
// }

// //VUEX MUTATIOn