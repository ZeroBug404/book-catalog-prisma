/*
  Warnings:

  - You are about to drop the `ordered_books` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `review_and_ratingorder` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ordered_books" DROP CONSTRAINT "ordered_books_bookId_fkey";

-- DropForeignKey
ALTER TABLE "ordered_books" DROP CONSTRAINT "ordered_books_orderId_fkey";

-- DropForeignKey
ALTER TABLE "review_and_ratingorder" DROP CONSTRAINT "review_and_ratingorder_userId_fkey";

-- DropTable
DROP TABLE "ordered_books";

-- DropTable
DROP TABLE "review_and_ratingorder";

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "orderedBooks" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
