-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "status" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "user_id" TEXT,
    CONSTRAINT "projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task_name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "project_id" TEXT,
    CONSTRAINT "tasks_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tag_name" TEXT NOT NULL,
    "color_id" INTEGER NOT NULL,
    CONSTRAINT "tags_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "colors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "color_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToTag" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    FOREIGN KEY ("A") REFERENCES "projects" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "colors_color_name_key" ON "colors"("color_name");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTag_AB_unique" ON "_ProjectToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTag_B_index" ON "_ProjectToTag"("B");
