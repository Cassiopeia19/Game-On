import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART) {
      const {id,amount,product} = action.payload.games
      const tempItem = state.cart.find((items) => items.id === id)
  if(tempItem) {
  } else {
    const newItem = {
      id:id,
      name:product.name,
      amount,
      image_url:product.image_url[0].url,
      price:product.price
    }
    return {...state,cart:[...state.cart,newItem]}
  }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer