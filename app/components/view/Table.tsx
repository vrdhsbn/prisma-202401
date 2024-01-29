import { getProducts } from '@/app/utils/getProducts'
import { DeleteButton } from '../ui/DeleteButton'
import { UpdateButton } from '../ui/UpdateButton'

export const Table = async () => {
  const products = await getProducts()

  return (
    <table className='c-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>商品名</th>
          <th>説明文</th>
          <th>価格</th>
          <th>在庫</th>
          <th>カテゴリ</th>
          <th>最終更新</th>
          <th>更新</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {products?.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price.toLocaleString()}</td>
            <td>{product.stock}</td>
            <td>{product.category.title}</td>
            <td>{product.updatedAt.toLocaleString()}</td>
            <td>
              <UpdateButton id={product.id} />
            </td>
            <td>
              <DeleteButton id={product.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
