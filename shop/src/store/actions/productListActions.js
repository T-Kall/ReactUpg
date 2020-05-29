import actiontypes from '../actiontypes'
import axios from 'axios'


// PRODUCTS (produktlistan med alla) med SSSSS!!!!

export const getProducts = () => {

    return dispatch => {
        axios.get('http://localhost:9998/api/products/')//vart vi ska hämta
            .then(res => {
                console.log(res.data, 'testAction1')
                dispatch(setProducts(res.data)) //hämtar allt res.data
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