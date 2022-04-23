import { ITag } from '../../../core/entities/Tag/ITag'
import { ITagRepository } from './ITagRepository'

export class MemoryTagRepository implements ITagRepository {
	private tags: ITag[] = [
		{ tag: 'Programmer', color: '#FF0' },
		{ tag: 'UI Deisgn', color: '#F00' }
	]

	async createTag(newTag: ITag): Promise<ITag> {
		const tag = this.tags.push(newTag)

		return this.tags[tag - 1]
	}

	async findAllTags(): Promise<ITag[]> {
		return this.tags
	}

	async deleteTag(id: number): Promise<void> {
		this.tags = this.tags.filter((_, index) => id !== index + 1)
	}
}