import { IProjectRepository } from '../../repositories/ProjectRepository/IProjectRepository'

export class GetAllProjects {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(idUser: string) {
		if (!idUser) {
			throw new Error('User id is required')
		}

		const allProjects = await this.repository.findAllProjects(idUser)

		return allProjects
	}
}