/*
  Warnings:

  - The primary key for the `Expense` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `expense` on the `Expense` table. All the data in the column will be lost.
  - The required column `expensid` was added to the `Expense` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_pkey",
DROP COLUMN "expense",
ADD COLUMN     "expensid" TEXT NOT NULL,
ADD CONSTRAINT "Expense_pkey" PRIMARY KEY ("expensid");
