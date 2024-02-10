/*
  Warnings:

  - Added the required column `user_id` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seller_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carts` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `seller_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `carts` ADD CONSTRAINT `carts_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
