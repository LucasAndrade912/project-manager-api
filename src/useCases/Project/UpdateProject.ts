import { IProjectRepository, ProjectUpdateData } from '../../repositories/ProjectRepository/IProjectRepository'

export class UpdateProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(idProject: string, idUser: string, props: ProjectUpdateData) {
		if (!idProject) {
			throw new Error('Project Id is required')
		}

		if (!idUser) {
			throw new Error('User Id is required')
		}

		const project = await this.repository.findProjectById(idProject, idUser)

		if (!project) {
			throw new Error('This project not exists')
		}

		await this.repository.updateProject(idProject, props)
	}
}