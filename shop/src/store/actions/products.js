import actiontypes from '../actiontypes'
import axios from 'axios'


// PRODUCTS (produktlistan med alla) med SSSSS!!!!

export const getProducts = () => {

    return dispatch => {
        axios.get('http://localhost:9998/api/products/')
            .then(res => {
                dispatch(setProducts(res.data))
            }
        )
    }
}

export const setProducts = (products) => {
    return {
        type: actiontypes().products.set,
        payload: products
    }
}



// PRODUCT (en produkt) id

export const getProduct = (id) => {

    return dispatch => {
        axios.get('http://localhost:9998/api/products/' + id)
            .then(res => {
                dispatch(setProduct(res.data))
            }
        )
    }
}

export const setProduct = (product) => {
    return {
        type: actiontypes().products.set,
        payload: product
    }
}



// export const addProduct = (product) => {
//     return {
//         type: actiontypes().products.add,
//         product
//     }
// }

// export const deleteProduct = (id) => {
//     return {
//         type: actiontypes().products.delete,
//         id: id
//     }
// }

//VUEX ACTIONS