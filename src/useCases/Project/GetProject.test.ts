import { GetProject } from './GetProject'

const idUserTest = '27a2beb9-cdf6-4a28-91ba-e0727c036f2b'
const idProjectTest = '0bd8125e-f142-4bb2-9a31-645d3c88f3d3'

const createProjectSpy = jest.fn()
const deleteProjectSpy = jest.fn()
const updateProjectSpy = jest.fn()
const findAllProjectsSpy = jest.fn()
const findProjectByIdSpy = jest.fn()

const getProjectUseCase = new GetProject({
	createProject: createProjectSpy,
	updateProject: updateProjectSpy,
	deleteProject: deleteProjectSpy,
	findAllProjects: findAllProjectsSpy,
	findProjectById: findProjectByIdSpy
})

describe('Get Project', () => {
	it('should be able to get a project', async () => {
		await expect(
			getProjectUseCase.exec(idProjectTest, idUserTest)
		).resolves.not.toThrow()

		expect(findProjectByIdSpy).toHaveBeenCalled()
	})

	it('should not be able to get a project without project Id', async () => {
		await expect(
			getProjectUseCase.exec(null, idUserTest)
		).rejects.toThrow()
	})

	it('should not be able to get a project without user Id', async () => {
		await expect(
			getProjectUseCase.exec(idProjectTest, null)
		).rejects.toThrow()
	})
})