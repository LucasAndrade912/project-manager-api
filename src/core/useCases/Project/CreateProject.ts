import { IProjectRepository } from '../../../infra/repositories/ProjectRepository/IProjectRepository'
import { Project } from '../../entities/Project'

interface CreateProjectProps {
  title: string
  description?: string
  idTags?: number[]
}

export class CreateProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(newProject: CreateProjectProps, idUser: string) {
		if (!newProject.title) {
			throw new Error('Title cannot be empty')
		}

		const { title, description, status } = new Project({
			status: 'to-do',
			title: newProject.title,
			description: newProject.description
		})

		const project = await this.repository.createProject({
			title,
			description,
			status,
			idTags: newProject.idTags
		}, idUser)

		return project
	}
}