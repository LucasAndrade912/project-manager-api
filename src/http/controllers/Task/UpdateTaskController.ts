import { Request, Response } from 'express'
import { UpdateTask } from '../../../useCases/Task/UpdateTask'
import { SqlTaskRepository } from '../../../repositories/TaskRepository/SqlTaskRepository'

export class UpdateTaskController {
	static async handle(req: Request, res: Response) {
		const { idProject, idTask, finished } = req.body

		const sqlTaskRepository = new SqlTaskRepository()
		const updateTaskUseCase = new UpdateTask(sqlTaskRepository)

		try {
			await updateTaskUseCase.exec(idProject, idTask, finished)

			res.status(200).send()
		} catch (err) {
			console.log(err)
			res.status(500).send()
		}
	}
}