import { IProject } from '../../../core/entities/Project/IProject'
import { IProjectRepository } from './IProjectRepository'

export class MemoryProjectRepository implements IProjectRepository {
	private projects: IProject[] = [
		{
			title: 'Project 1',
			description: 'Lorem ipsum description',
			status: 'to-do',
			tags: [
				{ tag: 'Programmer', color: '#F00' }
			]
		},
		{
			title: 'Project 2',
			description: 'Lorem ipsum description',
			status: 'done',
			tags: [
				{ tag: 'UI Design', color: '#AF1' }
			],
			tasks: [
				{ task: 'Task 1', finished: true }
			]
		}
	]

	async createProject(project: IProject): Promise<IProject> {
		this.projects.push(project)
    
		return project
	}

	async findAllProjects(): Promise<IProject[]> {
		return this.projects
	}
}