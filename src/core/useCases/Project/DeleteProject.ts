import { IProjectRepository } from '../../../infra/repositories/ProjectRepository/IProjectRepository'

export class DeleteProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(idProject: string, idUser: string) {
		const project = await this.repository.findProjectById(idProject, idUser)

		if (!project) {
			throw new Error('This project not exists')
		}
		
		await this.repository.deleteProject(idProject)
	}
}