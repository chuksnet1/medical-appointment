/*
  Warnings:

  - Made the column `approval` on table `Appointment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Appointment" ALTER COLUMN "approval" SET NOT NULL,
ALTER COLUMN "approval" SET DEFAULT false;
