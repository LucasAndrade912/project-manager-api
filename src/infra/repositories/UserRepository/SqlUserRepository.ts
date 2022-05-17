import { prisma } from '../prisma/prismaClient'
import { IUserRepository } from './IUserRepository'

export class SqlUserRepository implements IUserRepository {
	async createUser(id: string) {
		await prisma.user.create({ data: { id } })
	}

	async findUserById(id: string) {
		const user = await prisma.user.findUnique({
			where: { id },
			select: {
				id: true,
				created_at: false,
				projects: false
			}
		})

		return user.id
	}

	async deleteUser(id: string) {
		await prisma.user.delete({
			where: { id }
		})
	}
}