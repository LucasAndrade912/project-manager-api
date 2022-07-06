import { Response } from 'express'
import { CustomRequest } from '../../types'
import { CreateTag } from '../../../useCases/Tag/CreateTag'
import { SqlTagRepository } from '../../../repositories/TagRepository/SqlTagRepository'

export class CreateTagController {
	static async handle(req: CustomRequest, res: Response) {
		const idUser = req.uid
		const { tagName, idColor } = req.body

		const sqlTagRepository = new SqlTagRepository()
		const createTagUseCase = new CreateTag(sqlTagRepository)

		try {
			const idTag = await createTagUseCase.exec(tagName, idColor, idUser)

			return res.status(201).json(idTag)
		} catch (err) {
			console.log(err)
			return res.status(500).send()
		}
	}
}