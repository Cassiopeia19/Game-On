import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero, Loading } from '../components'
import { useProductsContext } from '../context/products_context'

const ProductsPage = () => {
   const {products_loading} = useProductsContext();
  return (
    <main>
      <PageHero title="/games" />
      <Wrapper className="page">
        <div className="section-center products">
  {
          products_loading ? <div><Loading /></div>
          : <>
            <Filters />
            <div>
              <Sort />
              <ProductList />
            </div>
          </>
        }
      </div>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage