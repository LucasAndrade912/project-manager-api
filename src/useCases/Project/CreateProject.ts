import { IProjectRepository } from '../../repositories/ProjectRepository/IProjectRepository'
import { Project } from '../../entities/Project'

interface ProjectCreateData {
  title: string
  description?: string
  idTags?: number[]
}

export class CreateProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(data: ProjectCreateData, idUser: string) {
		if (!data.title) {
			throw new Error('Title cannot be empty')
		}

		const { title, description, status } = new Project({
			status: 'to-do',
			title: data.title,
			description: data.description
		})

		const id = await this.repository.createProject({
			title,
			description,
			status,
			idTags: data.idTags
		}, idUser)

		return id
	}
}