import { ITagRepository } from '../../repositories/TagRepository/ITagRepository'
import { Tag } from '../../entities/Tag'

export class CreateTag {
	private repository: ITagRepository

	constructor(repository: ITagRepository) {
		this.repository = repository
	}

	async exec(tagName: string, idColor: number, idUser: string) {
		console.log(tagName, idColor)
		if (!tagName || !idColor) {
			throw new Error('TagName and IdColor fields must be filled in')
		}

		const { tag_name, id_color } = new Tag({ tag_name: tagName, id_color: idColor })

		const tag = await this.repository.createTag(tag_name, id_color, idUser)

		return tag
	}
}