import { prisma } from '../prisma/prismaClient'
import { ITagRepository, TagFindData } from './ITagRepository'

export class SqlTagRepository implements ITagRepository {
	async createTag(tagName: string, idColor: number) {
		await prisma.tag.create({
			data: {
				tag_name: tagName,
				color: {
					connect: {
						id: idColor
					}
				}
			}
		})
	}

	async findAllTags(idUser: string) {
		const tags = await prisma.tag.findMany({
			where: { user_id: idUser },
			select: {
				id: true,
				tag_name: true,
				color: true,
				user_id: false
			}
		})

		return tags as TagFindData[]
	}

	async deleteTag(id: number) {
		await prisma.tag.delete({
			where: { id }
		})
	}
  
}