import { IUserRepository } from '../../repositories/UserRepository/IUserRepository'

export class DeleteUser {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	async exec(id: string) {
		if (!id) {
			throw new Error('Id is required')
		}

		await this.repository.deleteUser(id)
	}
}