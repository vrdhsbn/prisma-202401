'use client'

import { updateProduct } from '@/app/utils/updateProduct'

export const UpdateButton = async ({ id }: { id: number }) => {
  return (
    <button
      type='button'
      onClick={() => {
        updateProduct(id)
      }}
    >
      更新
    </button>
  )
}
