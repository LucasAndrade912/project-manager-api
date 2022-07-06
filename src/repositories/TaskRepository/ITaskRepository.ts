export interface ITaskRepository {
  createTask(taskName: string, idProject: string): Promise<number>
  updateTask(idProject: string, idTask: number, finished: boolean): Promise<void>
}