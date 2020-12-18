import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  return (
    <h4>product list</h4>
  )
   const {filtered_products:products} = useFilterContext();

   return <GridView products={products}>games list</GridView>
}

export default ProductList