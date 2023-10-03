import bananas from '../data/bananas.json'

export interface Product {
  id: string
  name: string
  price: number
}

const getProducts = (): Product[] => {
  return bananas.products
}

export default getProducts
