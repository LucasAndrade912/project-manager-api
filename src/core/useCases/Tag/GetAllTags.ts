import { ITagRepository } from '../../../infra/repositories/TagRepository/ITagRepository'

export class GetAllTags {
	private repository: ITagRepository

	constructor(repository: ITagRepository) {
		this.repository = repository
	}

	async exec() {
		const tags = await this.repository.findAllTags()

		return tags
	}
}