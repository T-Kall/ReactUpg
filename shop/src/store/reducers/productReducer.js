import actiontypes from '../actiontypes'

const initState = {}


export default (state = initState, action) => {
    switch(action.type) {

        case actiontypes().product.set:
            state =  action.payload 
            //state =  [...state.action.payload]
            //state.product =  action.payload // Så här ska det stå om jag har båda i samma reducer
            return state

        default:
            return state
    }
}


