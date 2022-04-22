import { IUserRepository } from '../../../infra/repositories/UserRepository/IUserRepository'

export class DeleteUser {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	async exec(id: string) {
		await this.repository.deleteUser(id)
	}
}