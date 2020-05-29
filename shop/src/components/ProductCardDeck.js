import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/products'
import ProductCard from './ProductCard'

export default function ProductCardDeck() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    console.log(products, 'Ho ho')

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])



    return (


        <div className="row row-cols-1 row-cols-md-3">
            { 
                products && products.map(product => {  
                    return <div>
                            <ProductCard key={product._id} product={product} />
                        </div>
                   
                })
            }
       </div>

    )
}
