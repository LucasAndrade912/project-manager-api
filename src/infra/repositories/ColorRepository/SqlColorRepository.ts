import { IColorRepository } from './IColorRepository'
import { prisma } from '../prisma/prismaClient'

export class SqlColorRepository implements IColorRepository {
	async findAllColors() {
		const colors = await prisma.color.findMany()

		return colors
	}
}