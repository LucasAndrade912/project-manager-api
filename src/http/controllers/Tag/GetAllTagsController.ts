import { Response } from 'express'
import { CustomRequest } from '../../types'
import { SqlTagRepository } from '../../../repositories/TagRepository/SqlTagRepository'
import { GetAllTags } from '../../../useCases/Tag/GetAllTags'

export class GetAllTagsController {
	static async handle(req: CustomRequest, res: Response) {
		const sqlTagRepository = new SqlTagRepository()
		const getAllTagsUseCase = new GetAllTags(sqlTagRepository)

		try {
			const tags = await getAllTagsUseCase.exec(req.uid)

			return res.status(200).json({ tags })
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}