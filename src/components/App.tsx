import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import ProductList from './ProductList'
import FavoritesOverlay from './FavoritesOverlay'

const Wrapper = styled.div`
  margin: 0;
`

const App = () => {
  return (
    <Wrapper>
      <FavoritesOverlay />
      <Header title='HEADER' />
      <ProductList />
    </Wrapper>
  )
}

export default App
