import { Request, Response } from 'express'
import { CreateTask } from '../../../../core/useCases/Task/CreateTask'
import { SqlTaskRepository } from '../../../repositories/TaskRepository/SqlTaskRepository'

export class CreateTaskController {
	static async handle(req: Request, res: Response) {
		const { taskName, idProject } = req.body
		const sqlTaskRepository = new SqlTaskRepository()
		const createTaskUseCase = new CreateTask(sqlTaskRepository)

		try {
			await createTaskUseCase.exec(taskName, idProject)

			return res.status(201).send()
		} catch (err) {
			console.log(err)
			res.status(500).send()
		}
	}
}