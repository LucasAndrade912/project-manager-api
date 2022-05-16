import { prisma } from '../prisma/prismaClient'
import { IProjectRepository, ProjectCreateData, ProjectFindData, ProjectUpdateData } from './IProjectRepository'

export class SqlProjectRepository implements IProjectRepository {
	async createProject(data: ProjectCreateData, idUser: string) {
		const tagConnections = data.idTags.map(idTag => {
			return { id: idTag }
		})

		await prisma.project.create({
			data: {
				title: data.title,
				description: data.description,
				image: data.image,
				status: data.status,
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
	}
  
	async findAllProjects(idUser: string) {
		const projects = await prisma.project.findMany({
			where: {
				user_id: idUser
			}
		})

		return projects as ProjectFindData[]
	}

	async findProjectById(idProject: string, idUser: string) {
		const project = await prisma.project.findFirst({
			where: {
				AND: {
					id: idProject,
					user_id: idUser
				}
			}
		})

		return project as ProjectFindData
	}

	async updateProject(idProject: string, changes: ProjectUpdateData) {
		const tagConnections = changes.connectTags?.map(tag => {
			return { id: tag }
		})

		const tagDisconnections = changes.disconnectTags?.map(tag => {
			return { id: tag }
		})

		await prisma.project.update({
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
	}

	async deleteProject(idProject: string) {
		await prisma.project.delete({
			where: {
				id: idProject
			}
		})
	}
}