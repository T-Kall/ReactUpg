import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../store/actions/products'

export default ({product}) => {

   const dispatch = useDispatch()

    return (

        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td><button onClick={() => dispatch(deleteProduct(product.id))}>REMOVE</button></td>
        </tr>

    )
}
