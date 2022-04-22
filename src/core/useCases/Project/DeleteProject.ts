import { IProjectRepository } from '../../../infra/repositories/ProjectRepository/IProjectRepository'

export class DeleteProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(id: number) {
		await this.repository.deleteProject(id)
	}
}