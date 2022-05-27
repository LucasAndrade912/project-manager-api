import { ITaskRepository } from '../../../infra/repositories/TaskRepository/ITaskRepository'

export class UpdateTask {
	private repository: ITaskRepository

	constructor(repository: ITaskRepository) {
		this.repository = repository
	}

	async exec(idProject: string, idTask: number, finished: boolean) {
		await this.repository.updateTask(idProject, idTask, finished)
	}
}