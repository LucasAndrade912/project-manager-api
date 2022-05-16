import { GetUser } from './GetUser'

const idUserTest = '27a2beb9-cdf6-4a28-91ba-e0727c036f2b'

const createUserSpy = jest.fn()
const findUserByIdSpy = jest.fn()
const deleteUserSpy = jest.fn()

const getUserUseCase = new GetUser({
	createUser: createUserSpy,
	findUserById: findUserByIdSpy,
	deleteUser: deleteUserSpy
})

describe('Get User', () => {
	it('should be able to get a user', async () => {
		await expect(
			getUserUseCase.exec(idUserTest)
		).resolves.not.toThrow()

		expect(findUserByIdSpy).toHaveBeenCalled()
	})

	it('should not be able to get a user without Id', async () => {
		await expect(
			getUserUseCase.exec(null)
		).rejects.toThrow()
	})
})