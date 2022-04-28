import { IProjectRepository } from '../../../infra/repositories/ProjectRepository/IProjectRepository'

export class GetProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(idProject: string, idUser: string) {
		const project = await this.repository.findProjectById(idProject, idUser)

		return project
	}
}