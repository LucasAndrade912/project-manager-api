import { IUserRepository } from '../../repositories/UserRepository/IUserRepository'

export class GetUser {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	async exec(id: string) {
		if (!id) {
			throw new Error('Id is required')
		}

		const user = await this.repository.findUserById(id)

		return user
	}
}