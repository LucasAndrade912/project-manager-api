import { Project } from '../../entities/Project'
import { CreateProject } from './CreateProject'

const idUserTest = '27a2beb9-cdf6-4a28-91ba-e0727c036f2b'

const createProjectSpy = jest.fn()
const deleteProjectSpy = jest.fn()
const updateProjectSpy = jest.fn()
const findAllProjectsSpy = jest.fn()
const findProjectByIdSpy = jest.fn()

const createProjectUseCase = new CreateProject({
	createProject: createProjectSpy,
	updateProject: updateProjectSpy,
	deleteProject: deleteProjectSpy,
	findAllProjects: findAllProjectsSpy,
	findProjectById: findProjectByIdSpy
})

describe('Create Project', () => {
	it('should be able to create a new project', async () => {
		await expect(
			createProjectUseCase.exec({
				title: 'Test project',
				description: 'Lorem ipsum'
			}, idUserTest)
		).resolves.not.toThrow()

		expect(createProjectSpy).toHaveBeenCalled()
	})

	it('should not be able to create a new project without title', async () => {
		await expect(
			createProjectUseCase.exec({
				title: '',
				description: 'Lorem ipsum'
			}, idUserTest)
		).rejects.toThrow()
	})

	it('should not be able to create a new project entity without title', async () => {
		expect(() => {
			new Project({
				title: '',
				description: 'Lorem ipsum',
				status: 'to-do'
			})
		}).toThrow()
	})

	it('should not be able to create a new project entity without status', async () => {
		expect(() => {
			new Project({
				title: 'Test project',
				description: 'Lorem ipsum',
				status: null
			})
		}).toThrow()
	})
})