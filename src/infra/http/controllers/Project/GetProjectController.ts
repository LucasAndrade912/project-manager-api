import { Response } from 'express'
import { CustomRequest } from '../../types'
import { SqlProjectRepository } from '../../../repositories/ProjectRepository/SqlProjectRepository'
import { GetProject } from '../../../../core/useCases/Project/GetProject'

export class GetProjectController {
	static async handle(req: CustomRequest, res: Response) {
		const idUser = req.uid
		const { idProject } = req.params

		const sqlProjectRepository = new SqlProjectRepository()
		const getProjectUseCase = new GetProject(sqlProjectRepository)

		try {
			const project = await getProjectUseCase.exec(idProject, idUser)

			return res.status(200).json({ project })
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}