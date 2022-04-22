import { IUser } from '../../../core/entities/User/IUser'
import { IUserRepository } from './IUserRepository'

export class MemoryUserRepository implements IUserRepository {
	private users: IUser[] = [
		{
			id: '882.12'
		}
	]

	async createUser(id: string): Promise<IUser> {
		const index = this.users.push({ id })

		return this.users[index - 1]
	}

	async findUserById(id: string): Promise<IUser> {
		const user = this.users.find(user => id === user.id)

		return user
	}

	async deleteUser(id: string): Promise<void> {
		this.users.filter(user => user.id !== id)
	}
}