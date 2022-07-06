import { Response } from 'express'
import { UpdateProject } from '../../../useCases/Project/UpdateProject'
import { SqlProjectRepository } from '../../../repositories/ProjectRepository/SqlProjectRepository'
import { CustomRequest } from '../../types'

export class UpdateProjectController {
	static async handle(req: CustomRequest, res: Response) {
		const { idProject, changes } = req.body
		const idUser = req.uid

		const sqlProjectRepository = new SqlProjectRepository()
		const updateProjectUseCase = new UpdateProject(sqlProjectRepository)

		try {
			await updateProjectUseCase.exec(idProject, idUser, changes)

			return res.status(200).send()
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}