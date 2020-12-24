import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART) {
      const {amount,product} = action.payload
      const itemExists = state.cart.some((items) => items.id === product.id)
      if(itemExists) {
        const tempCart = state.cart.map((cartItem) => {
          if(cartItem.id === product.id) {
           let newAmount = cartItem.amount + amount
           if(newAmount > cartItem) {
             newAmount = cartItem
           }
          return {...cartItem,amount:newAmount}
         } else {
            return cartItem
          }
        })
        return {...state,cart:tempCart}
      } else {
        const newItem = {
          id:product.id,
          name:product.name,
          amount,
          image:product.image_url,
          price:product.price
        }
    return {...state,cart:[...state.cart,newItem]}
  }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer