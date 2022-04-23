import { ITaskRepository } from '../../../infra/repositories/TaskRepository/ITaskRepository'
import { Task } from '../../entities/Task'

export class CreateTask {
	private repository: ITaskRepository

	constructor(repository: ITaskRepository) {
		this.repository = repository
	}

	async exec(taskName: string) {
		if (!taskName) {
			throw new Error('Task name cannot be empty')
		}

		const newTask = new Task({ task: taskName, finished: false })

		const task = await this.repository.createTask(newTask)

		return task
	}
}