import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, deleteFromCart } from '../store/actions/cartActions'



export default function CartItem({ item }) {
    const dispatch = useDispatch()


    const add = (event) => {
        event.stopPropagation()

        dispatch(addToCart(item))
    }

    // const remove = (event) => {
    //     event.stopPropagation();
    //     event.nativeEvent.stopImmediatePropagation();
    //     dispatch(removeFromCart(item._id))
    // }
 

    const remove = (id) => {
        dispatch(removeFromCart(id))
      }
    

    //   const deleteFromCart = () => {  
    //     dispatch(deleteFromCart(item.id))
    //   }


    return (

   
        <div className="cart-item">
            <div className="p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={item.image} alt="" className="img-fluid image-width" />
                    <div>
                        <div><strong>{item.name}</strong></div>
                        <div><small>{item.quantity} x {item.price} SEK</small></div>
                    </div>
                </div>
                <div>
                    <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
                    <button type="button" className="btn btn-grey px-3" onClick={() => remove(item._id)}>-</button>
                        {/* <button type="button" className="btn btn-grey px-3" onClick={remove}>-</button> */}
                        <button type="button" className="btn btn-grey px-3" onClickCapture={add}>+</button>
                    </div>

                    <div className="btn-group btn-group-sm" role="group" aria-label="trash">
                        <button className="btn btn-danger px-3" onClick={() => dispatch(deleteFromCart(item._id))}><i className="fas fa-trash"></i></button>
                        {/* <button className="btn btn-danger" onClick={() => deleteFromCart(item._id)}>bort</button> */}
                        {/* <button onClick={() => deleteFromCart(item)}>töm varukorg</button> */}
                        {/* <button className="btn btn-danger px-3" v-on:click.stop="deleteProductFromCart(item._id)"><i className="fas fa-trash"></i></button> */}
                    </div>
                </div>
            </div>
            <div className="dropdown-divider"></div>
        </div>

    )

}


