import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  AddToCart,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const {id} = useParams()
  const history = useHistory()
  const {
    single_product_loading:loading,
    single_product_error:error,
    single_product:product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])
  useEffect(() => {
    console.log(error)
    if(error) {
      setTimeout(() => {
        history.push('/')
      },3000)
    }
  },[error])
  if(loading) {
    return <Loading />
  }
  if(error) {
    return <Error />
  }
  const {
    name,
    price,
    description,
    description_preview,
    min_players,
    min_playtime,
    average_user_rating,
    primary_publisher,
    id:sku} = product
  console.log(product)
  return (
    <Wrapper>
      <PageHero title={name} product />
     <div className="section section-center page">
        <Link to='/products' className="btn">
          back to games
        </Link>
      <section className="content">
        <h2>{name}</h2>
        <p className="info">
          <span>Avg user rating : {average_user_rating}</span>
          </p>
        <h5 className="price">{formatPrice(price)}</h5>
        <p className="desc">{description}</p>
        <p className="desc">{description_preview}</p>
        <p className="info">
          <span>min players : {min_players}</span>
          </p>
        <p className="info">
          <span>min playtime : {min_playtime}</span>
          </p>
        <p className="info">
          <span>SKU : {sku}</span>
           </p>
        <p className="info">
            <span>publisher : {primary_publisher}</span>
            </p>
            <hr />
          <AddToCart product={product}/>
      </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage