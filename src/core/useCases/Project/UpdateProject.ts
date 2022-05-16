import { IProjectRepository, ProjectUpdateData } from '../../../infra/repositories/ProjectRepository/IProjectRepository'

export class UpdateProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(idProject: string, idUser: string, props: ProjectUpdateData) {
		const project = await this.repository.findProjectById(idProject, idUser)

		if (!project) {
			throw new Error('This project not exists')
		}

		await this.repository.updateProject(idProject, props)
	}
}