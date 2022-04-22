import { IUserRepository } from '../../../infra/repositories/UserRepository/IUserRepository'

export class CreateUser {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	async exec(id: string) {
		const user = await this.repository.findUserById(id)

		if (user) {
			throw new Error('User already registered')
		}

		const newUser = await this.repository.createUser(id)

		return newUser
	}
}