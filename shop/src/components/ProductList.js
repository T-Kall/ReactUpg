import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

export default () => {

    const products = useSelector(state => state.products)

    return (
        <table>
            <tbody>
                {
                    products.map(product => {
                        return (
                            <Product key={product.id} product={product} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}
