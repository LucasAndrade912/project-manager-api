import { Project } from '../entities/Project'
import { ITag } from '../entities/Tag/ITag'
import { ITask } from '../entities/Task/ITask'

interface CreateProjectProps {
  title: string,
  description?: string,
  image?: string,
  tags?: ITag[],
  tasks?: ITask[]
}

export class CreateProject {
	exec(props: CreateProjectProps) {
		const project = new Project({
			status: 'to-do',
			title: props.title,
			description: props.description,
			image: props.image,
			tags: props.tags,
			tasks: props.tasks
		})

		return project
	}
}