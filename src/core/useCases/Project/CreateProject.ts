import { IProjectRepository } from '../../../infra/repositories/ProjectRepository/IProjectRepository'
import { Project } from '../../entities/Project'
import { ITag } from '../../entities/Tag/ITag'

interface CreateProjectProps {
  title: string,
  description?: string,
  tags?: ITag[],
}

export class CreateProject {
	private repository: IProjectRepository

	constructor(repository: IProjectRepository) {
		this.repository = repository
	}

	async exec(props: CreateProjectProps) {
		const newProject = new Project({
			status: 'to-do',
			title: props.title,
			description: props.description,
			tags: props.tags,
		})

		const project = await this.repository.createProject(newProject)

		return project
	}
}