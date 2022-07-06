import { GetAllProjects } from './GetAllProjects'

const idUserTest = '27a2beb9-cdf6-4a28-91ba-e0727c036f2b'

const createProjectSpy = jest.fn()
const deleteProjectSpy = jest.fn()
const updateProjectSpy = jest.fn()
const findAllProjectsSpy = jest.fn()
const findProjectByIdSpy = jest.fn()

const getAllProjectsUseCase = new GetAllProjects({
	createProject: createProjectSpy,
	updateProject: updateProjectSpy,
	deleteProject: deleteProjectSpy,
	findAllProjects: findAllProjectsSpy,
	findProjectById: findProjectByIdSpy
})

describe('Get all Projects', () => {
	it('should be able to get all projects', async () => {
		await expect(
			getAllProjectsUseCase.exec(idUserTest)
		).resolves.not.toThrow()
	})

	it('should not be able to get all projects without user Id', async () => {
		await expect(
			getAllProjectsUseCase.exec(null)
		).rejects.toThrow()
	})
})