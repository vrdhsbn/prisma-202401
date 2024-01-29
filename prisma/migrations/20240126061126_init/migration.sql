-- CreateTable
CREATE TABLE "prisma_Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "price" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prisma_Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prisma_Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "prisma_Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "prisma_Product" ADD CONSTRAINT "prisma_Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "prisma_Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
