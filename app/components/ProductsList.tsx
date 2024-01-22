import { getProducts } from '../utils/getProducts'

// 商品一覧ページ
export const ProductsList = async () => {
  const products = await getProducts()

  return (
    <table className='c-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>商品名</th>
          <th>説明文</th>
          <th>画像ファイル</th>
          <th>価格</th>
          <th>在庫</th>
          <th>カテゴリ</th>
        </tr>
      </thead>
      <tbody>
        {products?.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.image}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.category.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
