-- AlterTable
ALTER TABLE "Galactapedia" ADD COLUMN     "category" TEXT[],
ADD COLUMN     "tags" TEXT[];

-- CreateTable
CREATE TABLE "Users" (
    "username" TEXT NOT NULL,
    "allowUploads" BOOLEAN NOT NULL DEFAULT false,
    "allowRequests" BOOLEAN NOT NULL DEFAULT false,
    "allowPatches" BOOLEAN NOT NULL DEFAULT false,
    "allowEdits" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");
