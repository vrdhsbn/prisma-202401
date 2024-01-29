'use client'

import { deleteProduct } from '@/app/utils/deleteProduct'

export const DeleteButton = async ({ id }: { id: number }) => {
  return (
    <button
      type='button'
      onClick={() => {
        deleteProduct(id)
      }}
    >
      削除
    </button>
  )
}
