import { User } from '@prisma/client'
import { IUser } from '../../../core/entities/User/IUser'
import { prisma } from '../prisma/prismaClient'
import { IUserRepository } from './IUserRepository'

export class SqlUserRepository implements IUserRepository<User> {
	async createUser(id: string): Promise<IUser> {
		const user = await prisma.user.create({ data: { id } })

		return user
	}

	async findUserById(id: string): Promise<User> {
		const user = await prisma.user.findFirst({
			where: { id },
			include: {
				projects: {
					select: {
						id: true,
						title: true,
						description: true,
						image: true,
						status: true,
						created_at: true,
						tasks: true,
						tags: true,
						updated_at: false,
						user_id: false
					}
				}
			}
		})

		return user
	}

	async deleteUser(id: string): Promise<void> {
		await prisma.user.delete({
			where: { id }
		})
	}
}