'use server'

import { PrismaClient } from '@prisma/client'

export const addProduct = async () => {
  const prisma = new PrismaClient()

  try {
    console.log('prisma connect...')
    const item = await prisma.product.create({
      data: {
        name: 'test',
        description: 'ほげほげ',
        image: 'dummy.jpg',
        price: 1200,
        stock: 3,
        category: {
          create: {
            title: 'hoge',
          },
        },
      },
    })
    console.log(item)
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
    console.log('prisma disconnect.')
  }
}
