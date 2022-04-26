import { Tag } from '@prisma/client'
import { prisma } from '../prisma/prismaClient'
import { ITagRepository } from './ITagRepository'

export class SqlTagRepository implements ITagRepository<Tag> {
	async createTag(tagName: string, idColor: number): Promise<Tag> {
		const tag = await prisma.tag.create({
			data: {
				tag_name: tagName,
				color: {
					connect: {
						id: idColor
					}
				}
			}
		})

		return tag
	}

	async findAllTags(): Promise<Tag[]> {
		const tags = await prisma.tag.findMany({
			include: {
				color: true
			}
		})

		return tags
	}

	async deleteTag(id: number): Promise<void> {
		await prisma.tag.delete({
			where: { id }
		})
	}
  
}