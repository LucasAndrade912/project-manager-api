import { ITask } from './ITask'

export class Task {
	public task_name: string
	public finished: boolean

	constructor(props: ITask) {
		this.task_name = props.task_name
		this.finished = props.finished
	}
}