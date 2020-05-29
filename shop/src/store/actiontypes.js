export default () => {
    return {
        products: {
            set: 'SET_PRODUCTS',
        },
        product: {
            set: 'SET_PRODUCT',
        }, 
        cart: {
            add: 'ADD_TO_CART',
            remove: 'REMOVE_FROM_CART',
            checkout: 'CHECKOUT_CART',
            clear: 'CLEAR_CART',
            delete: 'DELETE_FROM_CART'
        
        },

    }
}

