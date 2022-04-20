import { IProject } from './IProject'
import { ITask } from '../Task/ITask'
import { ITag } from '../Tag/ITag'

export class Project {
	public title: string
	public description: string
	public image: string
	public status: 'to-do' | 'in-progress' | 'done'
	public tasks: ITask[]
	public tags: ITag[]

	constructor(props: IProject) {
		this.title = props.title
		this.description = props.description
		this.image = props.image
		this.status = props.status
		this.tasks = props.tasks
	}
}