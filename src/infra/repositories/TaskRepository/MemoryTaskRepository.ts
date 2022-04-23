import { ITask } from '../../../core/entities/Task/ITask'
import { ITaskRepository } from './ITaskRepository'

export class MemoryTaskRepository implements ITaskRepository {
	private tasks: ITask[] = [
		{ task: 'Task 1', finished: false },
		{ task: 'Task 2', finished: true }
	]

	async createTask(task: ITask): Promise<ITask> {
		this.tasks.push(task)

		return task
	}

	async updateTask(id: number, task: { taskName?: string, finished?: boolean }): Promise<ITask> {
		this.tasks.forEach((currentTask, index) => {
			if (index + 1 === id) {
				if (task.taskName) currentTask.task = task.taskName
				if (task.finished) currentTask.finished = task.finished
			}
		})

		return this.tasks[id - 1]
	}

	async findAllTasks(): Promise<ITask[]> {
		return this.tasks
	}
}