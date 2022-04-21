import { IProjectRepository } from '../../../infra/repositories/ProjectRepository/IProjectRepository'
import { Project } from '../../entities/Project'
import { ITag } from '../../entities/Tag/ITag'
import { ITask } from '../../entities/Task/ITask'

interface CreateProjectProps {
  title: string,
  description?: string,
  image?: string,
  tags?: ITag[],
  tasks?: ITask[]
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
			image: props.image,
			tags: props.tags,
			tasks: props.tasks
		})

		const project = await this.repository.createProject(newProject)

		return project
	}
}