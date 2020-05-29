import actiontypes from '../actiontypes'
import jwt from 'jsonwebtoken'
const secretKey = 'c218b83b09494a81bf7afe03e160b1cf'


const initState = {
    shoppingcart: [],
    totalCartQuantity: 0,
    totalCartAmount: 0
}

export default (state = initState, action) => {
    let itemIndex


    switch(action.type) {

        //ADD - (PLUS) ÖKA med en produkt i kundvagn      
        case actiontypes().cart.add:
            try {
                itemIndex = state.shoppingcart.findIndex(product => product._id === action.product._id) 

                
                if (itemIndex < 0) {
                    state.shoppingcart = [...state.shoppingcart, action.product]
                } else  {
                    state.shoppingcart[itemIndex].quantity += 1 }

                state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                state.totalCartAmount = getTotalAmount(state.shoppingcart)

                localStorage.setItem('c_c218b83b09494a81bf7afe03e160b1cf', jwt.sign(state, secretKey))
            }
            catch {}

            return state

        // REMOVE - (MINUS) MINSKA med en produkt från kundvagn       
        case actiontypes().cart.remove:

            try {

                itemIndex = state.shoppingcart.findIndex(product => product._id === action.id) 

                state.shoppingcart[itemIndex].quantity === 1    
                    ? state.shoppingcart = state.shoppingcart.filter(item => item._id !== action.id) 
                    : state.shoppingcart[itemIndex].quantity -= 1

                state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                state.totalCartAmount = getTotalAmount(state.shoppingcart)

                localStorage.setItem('c_c218b83b09494a81bf7afe03e160b1cf', jwt.sign(state, secretKey))

                
            }
            catch {}

            return state

        // DELETE - Ta bort en hel produkt i cart
        case actiontypes().cart.delete:

            try {

                itemIndex = state.shoppingcart.findIndex(product => product._id === action.id)      

                state.shoppingcart[itemIndex].quantity = 1
                state.shoppingcart = state.shoppingcart.filter(item => item._id !== action.id) 

                state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                state.totalCartAmount = getTotalAmount(state.shoppingcart)

                localStorage.setItem('c_c218b83b09494a81bf7afe03e160b1cf', jwt.sign(state, secretKey))

   
            }
            catch {}

            return state
            
        
        //CLEAR  - Ta bort alla produkter           
        case actiontypes().cart.clear:
            try {

                // state.shoppingcart.forEach(product => {
                //     product.quantity = 1
                // }) 

                state.shoppingcart = []
                state.totalCartAmount = 0
                state.totalCartQuantity = 0

                state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
                state.totalCartAmount = getTotalAmount(state.shoppingcart)

                localStorage.removeItem('c_c218b83b09494a81bf7afe03e160b1cf')
            }
            catch {}

            return state
    
    
    
        
        //DEFAULT        
        default: 
            let cart = jwt.decode(localStorage.getItem('c_c218b83b09494a81bf7afe03e160b1cf'))

            if(cart)
                state = cart

            return state
    }
}

//Funktion som visar ANTAL /Quantity

const getTotalQuantity = (items) => { //products
    let totalQuantity = 0

    items.forEach(product => {
        totalQuantity += product.quantity
    });

    return totalQuantity
}

//Funktion som visar SUMMA /Amount

const getTotalAmount = (items) => {
    let totalAmount = 0

    items.forEach(product => {
        totalAmount += product.price * product.quantity
    });

    return totalAmount
}
