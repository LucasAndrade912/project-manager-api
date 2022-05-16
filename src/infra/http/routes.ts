import { Router } from 'express'
import { GetAllProjectsController } from './controllers/Project/GetAllProjectsController'
import { AuthMiddleware } from './middlewares/AuthMiddleware'
import { HandleUserMiddleware } from './middlewares/HandleUserMiddleware'

const routes = Router()

routes.get(
	'/projects',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	GetAllProjectsController.handle
)

export { routes }