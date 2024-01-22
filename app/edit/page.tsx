'use client'

import { addProduct } from '../utils/addProduct'

const Edit = () => {
  return (
    <div>
      <p>編集ページです</p>
      <button type='button' onClick={() => addProduct()}>
        レコード追加
      </button>
    </div>
  )
}

export default Edit
