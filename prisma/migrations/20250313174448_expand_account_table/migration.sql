/*
  Warnings:

  - Added the required column `account_number` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `opened_date` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "account_number" TEXT NOT NULL,
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "opened_date" TEXT NOT NULL;
