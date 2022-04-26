import { ITagRepository } from '../../../infra/repositories/TagRepository/ITagRepository'
import { Tag } from '../../entities/Tag'
import { ITag } from '../../entities/Tag/ITag'

export class CreateTag {
	private repository: ITagRepository

	constructor(repository: ITagRepository) {
		this.repository = repository
	}

	async exec(newTag: ITag) {
		if (!newTag.tag_name || !newTag.id_color) {
			throw new Error('TagName and IdColor fields must be filled in')
		}

		const { tag_name, id_color } = new Tag(newTag)

		const tag = await this.repository.createTag(tag_name, id_color)

		return tag
	}
}