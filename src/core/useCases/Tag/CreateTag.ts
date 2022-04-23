import { ITagRepository } from '../../../infra/repositories/TagRepository/ITagRepository'
import { Tag } from '../../entities/Tag'

export class CreateTag {
	private repository: ITagRepository

	constructor(repository: ITagRepository) {
		this.repository = repository
	}

	async exec(tagName: string, color: string) {
		if (!tagName || !color) {
			throw new Error('TagName and Color fields must be filled in')
		}

		const newTag = new Tag({ tag: tagName, color })

		const tag = await this.repository.createTag(newTag)

		return tag
	}
}