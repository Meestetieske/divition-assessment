import React, { useContext } from 'react'
import styled from 'styled-components'

import ProductCard from './ProductCard'
import { useAppSelector } from '../store'

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  ul {
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 10px;
  }

  li {
    min-width: 0;
  }
`

const ProductList = () => {
  const { products } = useAppSelector((state) => state.product)

  console.log(products)

  return (
    <Wrapper>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard {...product} />
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

export default ProductList
