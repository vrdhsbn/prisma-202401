// これってprisma schemaからもうちょっと簡単に生成できたりしないのか？
export type productType = {
  id: number
  name: string
  description: string
  image: string
  price: number
  stock: number
  categoryId: number
  createdAt: string
  updatedAt: string
} | null
