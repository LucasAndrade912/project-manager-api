import { ITaskRepository } from '../../../infra/repositories/TaskRepository/ITaskRepository'

export class GetAllTasks {
	private repository: ITaskRepository

	constructor(repository: ITaskRepository) {
		this.repository = repository
	}

	async exec() {
		const tasks = await this.repository.findAllTasks()

		return tasks
	}
}