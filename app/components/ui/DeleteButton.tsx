'use client'

import { deleteProduct } from '@/app/utils/deleteProduct'
// import { useTransition } from 'react'

const DeleteButton = async ({ id }: { id: number }) => {
  // const [, startTransition] = useTransition()

  return (
    <button
      type='button'
      onClick={() => {
        // startTransition(() => {
        deleteProduct(id)
        // })
      }}
    >
      削除
    </button>
  )
}

export default DeleteButton
