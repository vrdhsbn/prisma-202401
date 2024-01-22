import { Suspense } from 'react'
import { ProductsList } from '../components/ProductsList'
import '../styles/table.scss'

const Products = () => {
  return (
    <div>
      <p>商品一覧です</p>
      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList />
      </Suspense>
    </div>
  )
}

export default Products
