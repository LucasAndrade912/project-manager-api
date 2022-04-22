import { IProject } from '../Project/IProject'
import { IUser } from './IUser'

export class User {
	private id: string
	public projects: IProject[]

	constructor(props: IUser) {
		this.id = props.id
		this.projects = props.projects
	}
}