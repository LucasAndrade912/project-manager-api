import { ITask } from '../../../core/entities/Task/ITask'

export interface ITaskRepository {
  createTask(task: ITask): Promise<ITask>
  updateTask(id: number, task: { taskName?: string, finished?: boolean }): Promise<ITask>
  findAllTasks(): Promise<ITask[]>
}