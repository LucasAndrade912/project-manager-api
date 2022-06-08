import { Request, Response } from 'express'
import { GetAllColors } from '../../../../core/useCases/Color/GetAllColors'
import { SqlColorRepository } from '../../../repositories/ColorRepository/SqlColorRepository'

export class GetAllColorsController {
	static async handle(req: Request, res: Response) {
		const sqlColorRepository = new SqlColorRepository()
		const getAllColorsUseCase = new GetAllColors(sqlColorRepository)

		try {
			const colors = await getAllColorsUseCase.exec()

			return res.status(200).json({ colors })
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}