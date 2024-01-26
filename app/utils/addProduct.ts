'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const addProduct = async () => {
  const prisma = new PrismaClient()

  try {
    console.log('prisma connect...')
    const item = await prisma.prisma_Product.create({
      data: {
        name: 'テスト商品',
        description: '説明文です',
        image: 'dummy.jpg',
        price: 1200,
        stock: 3,
        category: {
          create: {
            title: 'カテゴリ1',
          },
        },
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
