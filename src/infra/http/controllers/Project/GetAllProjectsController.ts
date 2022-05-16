import { Response } from 'express'
import { GetAllProjects } from '../../../../core/useCases/Project/GetAllProjects'
import { SqlProjectRepository } from '../../../repositories/ProjectRepository/SqlProjectRepository'
import { CustomRequest } from '../../types'

export class GetAllProjectsController {
	static async handle(req: CustomRequest, res: Response) {
		const sqlProjectsRepository = new SqlProjectRepository()
		const getAllProjects = new GetAllProjects(sqlProjectsRepository)

		try {
			const projects = await getAllProjects.exec(req.uid)
		
			return res.status(200).json({ projects })
		} catch (err) {
			return res.status(400).json({ error: err })
		}
	}
}