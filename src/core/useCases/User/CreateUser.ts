import { IUserRepository } from '../../../infra/repositories/UserRepository/IUserRepository'
import { User } from '../../entities/User'

export class CreateUser {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	async exec(id: string) {
		const user = await this.repository.findUserById(id)

		if (user) {
			return user
		}

		const newUser = new User({ id })
		await this.repository.createUser(newUser.id)

		return newUser
	}
}