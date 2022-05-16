import { NextFunction, Response } from 'express'
import { SqlUserRepository } from '../../repositories/UserRepository/SqlUserRepository'
import { CreateUser } from '../../../core/useCases/User/CreateUser'
import { CustomRequest } from '../types'
import { GetUser } from '../../../core/useCases/User/GetUser'

export class HandleUserMiddleware {
	static async handle(req: CustomRequest, res: Response, next: NextFunction) {
		const sqlUserRepository = new SqlUserRepository()
		const getUser = new GetUser(sqlUserRepository)
		const createUser = new CreateUser(sqlUserRepository)

		try {
			const user = await getUser.exec(req.uid)

			if (!user) {
				await createUser.exec(req.uid)
			}

			next()
		} catch (err) {
			console.log(err)
			return res.status(400).json({ error: err })
		}
	}
}