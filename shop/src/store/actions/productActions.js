import actiontypes from '../actiontypes'
import axios from 'axios'



export const getProduct = (id) => {

    return dispatch => {
        axios.get('http://localhost:9998/api/products/' + id)
      
            .then(res => {
                console.log(res.data, 'testAction2')
                dispatch(setProduct(res.data))
            }
        )
        //.catch(error => console.log(error))
    }
}

export const setProduct = (product) => {
    return {
        type: actiontypes().product.set,
        payload: product
    }
}


//   export const getProduct = (id) => {
//     return async dispatch => {
//        const res = await axios.get('http://localhost:9998/api/products/' + id)
//        dispatch(setProduct(res.data))
//     }
//   }


  


//   export const getProduct = (id) => {
//     return async dispatch => {
//         // const res = await axios.get('http://localhost:9999/api/products/' + id)

//         const res = {
//             data: {id: 1, name: 'product 1', desc: 'this is product 1', price: 100 }
//         }

//         dispatch(setProduct(res.data))
//     }
//   }




