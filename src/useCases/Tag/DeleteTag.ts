import { ITagRepository } from '../../repositories/TagRepository/ITagRepository'

export class DeleteTag {
	private repository: ITagRepository

	constructor(repository: ITagRepository) {
		this.repository = repository
	}

	async exec(id: number) {
		await this.repository.deleteTag(id)
	}
}