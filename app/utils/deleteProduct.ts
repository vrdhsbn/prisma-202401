'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

export const deleteProduct = async (id: number) => {
  const prisma = new PrismaClient()

  try {
    console.log('prisma connect...')
    const item = await prisma.prisma_Product.delete({
      where: {
        id: id,
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
