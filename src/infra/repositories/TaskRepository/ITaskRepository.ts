import { ITask } from '../../../core/entities/Task/ITask'

export interface TaskProps {
  taskName?: string
  finished?: boolean
}

export interface ITaskRepository<T = ITask> {
  createTask(newTask: ITask, idProject: string): Promise<T>
  updateTask(idTask: number, task: TaskProps): Promise<T>
}