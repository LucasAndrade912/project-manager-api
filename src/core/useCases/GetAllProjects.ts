import { IProjectRepository } from '../../infra/repositories/ProjectRepository/IProjectRepository'

export class GetAllProjects {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec() {
		const allProjects = await this.repository.findAllProjects()

		return allProjects
	}
}