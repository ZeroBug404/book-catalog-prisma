/*
  Warnings:

  - You are about to drop the column `review` on the `review_and_rating` table. All the data in the column will be lost.
  - The `rating` column on the `review_and_rating` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `price` on the `book` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "book" DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "review_and_rating" DROP COLUMN "review",
DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "review_and_ratingorder" ALTER COLUMN "status" SET DEFAULT 'pending';
