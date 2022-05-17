import { Response } from 'express'
import { SqlProjectRepository } from '../../../repositories/ProjectRepository/SqlProjectRepository'
import { CreateProject } from '../../../../core/useCases/Project/CreateProject'
import { CustomRequest } from '../../types'

export class CreateProjectController {
	static async handle(req: CustomRequest, res: Response) {
		const { title, description, idTags } = req.body
		const userId = req.uid

		const sqlProjectRepository = new SqlProjectRepository()
		const createProjectUseCase = new CreateProject(sqlProjectRepository)

		try {
			await createProjectUseCase.exec({
				title,
				description,
				idTags
			}, userId)

			return res.status(201).send()
		} catch (err) {
			console.log(err)
			return res.status(400)
		}
	}
}