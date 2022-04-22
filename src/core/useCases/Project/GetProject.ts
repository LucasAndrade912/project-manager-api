import { IProjectRepository } from '../../../infra/repositories/ProjectRepository/IProjectRepository'

export class GetProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(id: number) {
		const project = await this.repository.findProjectById(id)

		return project
	}
}