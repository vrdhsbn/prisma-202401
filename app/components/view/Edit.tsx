'use client'

import { addProduct } from '@/app/utils/addProduct'

export const Edit = () => {
  return (
    <div>
      <button type='button' onClick={() => addProduct()}>
        レコード追加
      </button>
    </div>
  )
}
