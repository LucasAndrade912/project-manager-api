export interface ITaskRepository {
  createTask(taskName: string, idProject: string): Promise<void>
  updateTask(idProject: string, idTask: number, finished: boolean): Promise<void>
}