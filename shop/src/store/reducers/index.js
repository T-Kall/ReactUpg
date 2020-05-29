import { combineReducers } from 'redux'

//REDUCERS
import productReducer from './productReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    //products
    product: productReducer,
    products: productListReducer,
    cart: cartReducer
})


// import { combineReducers } from 'redux'

// //REDUCERS
// import products from './products'

// export default combineReducers({
//     products  
// })


// import { combineReducers } from 'redux'

// // REDUCERS
// import cartReducer from './cartReducer'
// import productCatalogReducer from './productCatalogReducer'
// import productReducer from './productReducer'

// export default combineReducers({
//     cart: cartReducer,
//     productCatalog: productCatalogReducer,
//     product: productReducer
// })

