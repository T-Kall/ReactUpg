import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkoutCart, clearCart } from '../store/actions/cartActions'
import CartItem from './CartItem'

export default function Cart() {
    const dispatch = useDispatch()
    const shoppingcart = useSelector(state => state.cart.shoppingcart)
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

    const save = (shoppingcart) => {
        dispatch(checkoutCart(shoppingcart))
    }



    const clear = (shoppingcart) => {
        dispatch(clearCart(shoppingcart))
    }



    if (shoppingcart.length < 1) {
        return (
            <div className="cart-item p-2">Kundvagnen är tom</div>
        )
      } else {

    return (


        <div>
           
            <div className="mb-4">
                {
                    shoppingcart.map(product => {
                        return (<CartItem key={product._id} item={product} />)

                    })
                }
            </div>

            <div className="p-2 align-items-center">
                <div className="ml-2 d-flex" >
               
                    <div>                    
                     Totalt: <span className="ml-1">{totalCartAmount} SEK</span><br/>
                     <small className="text-muted">inkl. moms</small>
                    </div>
                    <div className="ml-3">Antal: {totalCartQuantity} st</div>
                    
                </div>
                <div className="ml-2">
                <button className="btn btn-danger" onClick={() => clear(shoppingcart)}>Töm kundvagn</button>
                <button className="btn btn-primary" onClick={() => save(shoppingcart)}>Gå till kassan</button>
                </div>
            </div>

        </div>


        // <div>
        //     ShoppingCart
        //     <div className="mb-4">
        //         {
        //         shoppingcart.map(product => {
        //             return (<CartItem key={product._id} item={product} />)

        //         })
        //         }
        //     </div>

        //     <p>Total Amount: {totalCartAmount} SEK</p>
        //     <p>Total Quantity: {totalCartQuantity} st</p>

        //     <button onClick={() => clear(shoppingcart)}>töm varukorg</button>
        //     <button onClick={() => save(shoppingcart)}>CHECKOUT</button>
        // </div>
    )
}

}