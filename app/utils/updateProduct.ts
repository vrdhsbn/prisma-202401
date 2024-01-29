'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const updateProduct = async (id: number) => {
  const prisma = new PrismaClient()

  try {
    console.log('prisma connect...')
    const item = await prisma.prisma_Product.update({
      where: {
        id: id,
      },
      data: {
        // 適当にランダムなデータで更新する
        price: Math.random() * 1000,
        stock: Math.random() * 10,
      },
    })
    console.log(item)
    revalidatePath('/')
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
    console.log('prisma disconnect.')
  }
}
