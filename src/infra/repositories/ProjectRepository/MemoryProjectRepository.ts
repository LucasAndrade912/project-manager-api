import { IProject } from '../../../core/entities/Project/IProject'
import { IProjectRepository, IUpdateProjectProps } from './IProjectRepository'

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

	async findProjectById(id: number): Promise<IProject> {
		return this.projects[id - 1]
	}

	async updateProject(id: number, changes: IUpdateProjectProps): Promise<IProject> {
		const updatedProjects = this.projects.map((project, index) => {
			if (index + 1 === id) {
				return { ...project, ...changes }
			} else {
				return { ...project }
			}
		})

		this.projects = updatedProjects

		return this.projects[id - 1]
	}

	async deleteProject(id: number): Promise<void> {
		this.projects = this.projects.filter((_, idx) => id !== (idx + 1))
	}
}