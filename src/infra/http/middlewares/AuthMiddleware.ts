import { NextFunction, Response } from 'express'
import { getAuth } from 'firebase-admin/auth'
import { CustomRequest } from '../types'

export class AuthMiddleware {
	static async authenticate(req: CustomRequest, res: Response, next: NextFunction) {
		const tokenId = req.headers.authorization.split(' ')[1]

		try {
			const { uid } = await getAuth().verifyIdToken(tokenId)

			req.uid = uid

			next()
		} catch (err) {
			console.log(err)
			return res.status(401).json({ error: 'Invalid token' })
		}
	}
}