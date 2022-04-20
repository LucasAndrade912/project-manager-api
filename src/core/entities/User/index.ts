import { IProject } from '../Project/IProject'

export class User {
	public projects: IProject[]

	constructor(projects: IProject[]) {
		this.projects = projects
	}
}