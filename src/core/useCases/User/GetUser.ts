import { IUserRepository } from '../../../infra/repositories/UserRepository/IUserRepository'

export class GetUser {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	async exec(id: string) {
		const user = this.repository.findUserById(id)

		return user
	}
}