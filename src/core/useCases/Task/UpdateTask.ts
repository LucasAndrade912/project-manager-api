import { ITaskRepository } from '../../../infra/repositories/TaskRepository/ITaskRepository'

export class UpdateTask {
	private repository: ITaskRepository

	constructor(repository: ITaskRepository) {
		this.repository = repository
	}

	async exec(id: number, task: { taskName?: string, finished?: boolean }) {
		const updatedTask = await this.repository.updateTask(id, {
			taskName: task.taskName,
			finished: task.finished
		})

		return updatedTask
	}
}