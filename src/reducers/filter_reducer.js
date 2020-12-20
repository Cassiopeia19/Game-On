import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state,action) => {
  if(action.type === LOAD_PRODUCTS) {
   if (!action.payload.games) {
     return state;
}
const prices = action.payload.games.map((p) => p.price);
  let max_price = Math.max(...prices);
  
    return {...state,
      all_products: {...action.payload},
      filtered_products: {...action.payload},
      filters:{...state.filters,max_price:max_price,price:max_price}
    }
  }
  if(action.type === SET_GRIDVIEW) {
    return {...state,grid_view:true}
  }
   if(action.type === SET_LISTVIEW) {
    return {...state,grid_view:false}
  }
  if(action.type === UPDATE_SORT) {
    return {...state,sort: action.payload}
  }
  if(action.type === SORT_PRODUCTS) {
    const {sort,filtered_products} = state
     if (!filtered_products.games) {
    return state;
  }
  let tempProducts = {...filtered_products}
  if(sort === 'price-lowest') {
    tempProducts.games = [...tempProducts.games].sort((a,b) => a.price - b.price)
  }
    if(sort === 'price-highest') {
     tempProducts.games = [...tempProducts.games].sort((a,b) => b.price - a.price)
    }
    if(sort === 'name-a') {
     tempProducts.games = [...tempProducts.games].sort((a,b) => {
       return a.name.localeCompare(b.name)
     })
    }
    if(sort === 'name-z') {
      tempProducts.games = [...tempProducts.games].sort((a,b) => {
       return b.name.localeCompare(a.name)
     })
    }
    return {...state,filtered_products:tempProducts}
  }
  if(action.type === UPDATE_FILTERS) {
    const {name,value} = action.payload
    return{...state,filters:{...state.filters,[name]:value}}
  }
  if(action.type === FILTER_PRODUCTS) {
    //console.log('filtering products')
    return {...state}
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer