import { IProjectRepository } from '../../repositories/ProjectRepository/IProjectRepository'

export class GetProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(idProject: string, idUser: string) {
		if (!idProject) {
			throw new Error('Project Id is required')
		}

		if (!idUser) {
			throw new Error('User Id is required')
		}

		const project = await this.repository.findProjectById(idProject, idUser)

		return project
	}
}