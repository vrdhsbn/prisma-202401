import { PrismaClient } from '@prisma/client'

export const getProducts = async () => {
  const prisma = new PrismaClient()

  try {
    console.log('prisma connect...')
    const products = await prisma.prisma_Product.findMany({
      orderBy: [
        {
          id: 'desc',
        },
      ],
      include: {
        category: true,
      },
    })
    return products
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
    console.log('prisma disconnect.')
  }
}
