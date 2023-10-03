import { createSlice } from '@reduxjs/toolkit'

import getProducts, { Product } from '../utils/getProducts'

interface ProductState {
  products: Product[]
}

const initialState: ProductState = {
  products: getProducts(),
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
})

export const {} = productSlice.actions
export default productSlice.reducer
