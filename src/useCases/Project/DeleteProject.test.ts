import { DeleteProject } from './DeleteProject'

const idUserTest = '27a2beb9-cdf6-4a28-91ba-e0727c036f2b'
const idProjectTest = '0bd8125e-f142-4bb2-9a31-645d3c88f3d3'

const createProjectSpy = jest.fn()
const deleteProjectSpy = jest.fn()
const updateProjectSpy = jest.fn()
const findAllProjectsSpy = jest.fn()
const findProjectByIdSpy = jest.fn().mockResolvedValue({ title: 'My Project' })

const deleteProjectUseCase = new DeleteProject({
	createProject: createProjectSpy,
	updateProject: updateProjectSpy,
	deleteProject: deleteProjectSpy,
	findAllProjects: findAllProjectsSpy,
	findProjectById: findProjectByIdSpy
})

describe('Delete Project', () => {
	it('should be able delete a project', async () => {
		await expect(
			deleteProjectUseCase.exec(idProjectTest, idUserTest)
		).resolves.not.toThrow()

		expect(findProjectByIdSpy).toHaveBeenCalled()
		expect(deleteProjectSpy).toHaveBeenCalled()
	})

	it('should not be able delete a project without project Id', async () => {
		await expect(
			deleteProjectUseCase.exec(null, idUserTest)
		).rejects.toThrow()
	})

	it('should not be able delete a project without user Id', async () => {
		await expect(
			deleteProjectUseCase.exec(idProjectTest, null)
		).rejects.toThrow()
	})

	it('should not be able delete a project if he not exists', async () => {
		findProjectByIdSpy.mockResolvedValue(null)

		await expect(
			deleteProjectUseCase.exec(idProjectTest, idUserTest)
		).rejects.toThrow()

		expect(findProjectByIdSpy).toHaveBeenCalled()
	})
})