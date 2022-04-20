import { ITask } from './ITask'

export class Task {
	public task: string
	public finished: boolean

	constructor(props: ITask) {
		this.task = props.task
		this.finished = props.finished
	}
}