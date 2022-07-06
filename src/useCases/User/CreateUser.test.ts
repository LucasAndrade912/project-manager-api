import { CreateUser } from './CreateUser'

const idUserTest = '27a2beb9-cdf6-4a28-91ba-e0727c036f2b'

const createUserSpy = jest.fn()
const findUserByIdSpy = jest.fn()
const deleteUserSpy = jest.fn()

const createUserUseCase = new CreateUser({
	createUser: createUserSpy,
	findUserById: findUserByIdSpy,
	deleteUser: deleteUserSpy
})

describe('Create User', () => {
	it('should be able to create to create a new user', async () => {
		await expect(
			createUserUseCase.exec(idUserTest)
		).resolves.not.toThrow()

		expect(createUserSpy).toHaveBeenCalled()
	})

	it('should not be able to create to create a new user without Id', async () => {
		await expect(
			createUserUseCase.exec(null)
		).rejects.toThrow()
	})
})