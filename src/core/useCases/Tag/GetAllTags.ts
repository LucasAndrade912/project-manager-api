import { ITagRepository } from '../../../infra/repositories/TagRepository/ITagRepository'

export class GetAllTags {
	private repository: ITagRepository

	constructor(repository: ITagRepository) {
		this.repository = repository
	}

	async exec(idUser: string) {
		const tags = await this.repository.findAllTags(idUser)

		return tags
	}
}