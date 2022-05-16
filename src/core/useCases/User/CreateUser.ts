import { IUserRepository } from '../../../infra/repositories/UserRepository/IUserRepository'
import { User } from '../../entities/User'

export class CreateUser {
	private repository: IUserRepository

	constructor(repository: IUserRepository) {
		this.repository = repository
	}

	async exec(id: string) {
		if (!id) {
			throw new Error('Id is required')
		}

		const newUser = new User({ id })
		await this.repository.createUser(newUser.id)
	}
}