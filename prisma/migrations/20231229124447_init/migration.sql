-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Category_id_fkey" FOREIGN KEY ("id") REFERENCES "Post" ("userId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");
