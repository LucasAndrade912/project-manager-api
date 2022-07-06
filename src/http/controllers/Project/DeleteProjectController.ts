import { Response } from 'express'
import { DeleteProject } from '../../../useCases/Project/DeleteProject'
import { SqlProjectRepository } from '../../../repositories/ProjectRepository/SqlProjectRepository'
import { CustomRequest } from '../../types'

export class DeleteProjectController {
	static async handle(req: CustomRequest, res: Response) {
		const { idProject } = req.params
		const idUser = req.uid

		const sqlProjectRepository = new SqlProjectRepository()
		const deleteProjectUseCase = new DeleteProject(sqlProjectRepository)

		try {
			await deleteProjectUseCase.exec(idProject, idUser)

			return res.status(200).send()
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}