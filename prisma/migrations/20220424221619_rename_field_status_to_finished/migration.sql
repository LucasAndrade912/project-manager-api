/*
  Warnings:

  - You are about to drop the column `status` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `finished` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task_name" TEXT NOT NULL,
    "finished" BOOLEAN NOT NULL,
    "project_id" TEXT,
    CONSTRAINT "tasks_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_tasks" ("id", "project_id", "task_name") SELECT "id", "project_id", "task_name" FROM "tasks";
DROP TABLE "tasks";
ALTER TABLE "new_tasks" RENAME TO "tasks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
