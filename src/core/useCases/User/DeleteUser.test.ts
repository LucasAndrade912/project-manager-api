import { DeleteUser } from './DeleteUser'

const idUserTest = '27a2beb9-cdf6-4a28-91ba-e0727c036f2b'

const createUserSpy = jest.fn()
const findUserByIdSpy = jest.fn()
const deleteUserSpy = jest.fn()

const deleteUserUseCase = new DeleteUser({
	createUser: createUserSpy,
	findUserById: findUserByIdSpy,
	deleteUser: deleteUserSpy
})

describe('Delete User', () => {
	it('should be able to delete a user', async () => {
		await expect(
			deleteUserUseCase.exec(idUserTest)
		).resolves.not.toThrow()

		expect(deleteUserSpy).toHaveBeenCalled()
	})

	it('should not be able to delete a user without Id', async () => {
		await expect(
			deleteUserUseCase.exec(null)
		).rejects.toThrow()
	})
})