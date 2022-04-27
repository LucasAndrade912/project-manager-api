import { Project } from '@prisma/client'
import { prisma } from '../prisma/prismaClient'
import { CreateProjectProps, IProjectRepository, UpdateProjectProps } from './IProjectRepository'

export class SqlProjectRepository implements IProjectRepository<Project> {
	async createProject(newProject: CreateProjectProps, idUser: string): Promise<Project> {
		const tagConnections = newProject.idTags.map(idTag => {
			return { id: idTag }
		})

		const project = await prisma.project.create({
			data: {
				title: newProject.title,
				description: newProject.description,
				image: newProject.image,
				status: newProject.status,
				tags: {
					connect: tagConnections
				},
				user: {
					connect: {
						id: idUser
					}
				}
			}
		})

		return project
	}
  
	async findAllProjects(idUser: string): Promise<Project[]> {
		const projects = await prisma.project.findMany({
			where: {
				user_id: idUser
			}
		})

		return projects
	}

	async findProjectById(idProject: string, idUser: string): Promise<Project> {
		const project = await prisma.project.findFirst({
			where: {
				AND: {
					id: idProject,
					user_id: idUser
				}
			}
		})

		return project
	}

	async updateProject(idProject: string, changes: UpdateProjectProps): Promise<Project> {
		const tagConnections = changes.connectTags?.map(tag => {
			return { id: tag }
		})

		const tagDisconnections = changes.disconnectTags?.map(tag => {
			return { id: tag }
		})

		const updatedProject = await prisma.project.update({
			where: {
				id: idProject
			},
			data: {
				title: changes.title,
				description: changes.description,
				image: changes.image,
				status: changes.status,
				tags: {
					connect: tagConnections,
					disconnect: tagDisconnections
				}
			}
		})

		return updatedProject
	}

	async deleteProject(idProject: string): Promise<void> {
		await prisma.project.delete({
			where: {
				id: idProject
			}
		})
	}
}