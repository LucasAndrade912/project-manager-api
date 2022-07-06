import { UpdateProject } from './UpdateProject'

const idUserTest = '27a2beb9-cdf6-4a28-91ba-e0727c036f2b'
const idProjectTest = '0bd8125e-f142-4bb2-9a31-645d3c88f3d3'

const createProjectSpy = jest.fn()
const deleteProjectSpy = jest.fn()
const updateProjectSpy = jest.fn()
const findAllProjectsSpy = jest.fn()
const findProjectByIdSpy = jest.fn().mockResolvedValue({ title: 'Project test' })

const updateProjectUseCase = new UpdateProject({
	createProject: createProjectSpy,
	updateProject: updateProjectSpy,
	deleteProject: deleteProjectSpy,
	findAllProjects: findAllProjectsSpy,
	findProjectById: findProjectByIdSpy
})

describe('Update Project', () => {
	it('should be able update a project', async () => {
		await expect(
			updateProjectUseCase.exec(idProjectTest, idUserTest, {
				title: 'Update title'
			})
		).resolves.not.toThrow()

		expect(findProjectByIdSpy).toHaveBeenCalled()
		expect(updateProjectSpy).toHaveBeenCalled()
	})

	it('should not be able update a project without project Id', async () => {
		await expect(
			updateProjectUseCase.exec(null, idUserTest, {
				title: 'Update title'
			})
		).rejects.toThrow()
	})

	it('should not be able update a project without user Id', async () => {
		await expect(
			updateProjectUseCase.exec(idProjectTest, null, {
				title: 'Update title'
			})
		).rejects.toThrow()
	})

	it('should not be able update a project if he not exists', async () => {
		findProjectByIdSpy.mockResolvedValue(null)

		await expect(
			updateProjectUseCase.exec(idProjectTest, idUserTest, {
				title: 'Update title'
			})
		).rejects.toThrow()

		expect(findProjectByIdSpy).toHaveBeenCalled()
	})
})