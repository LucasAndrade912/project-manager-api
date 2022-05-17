import { Router } from 'express'
import { GetAllProjectsController } from './controllers/Project/GetAllProjectsController'
import { GetProjectController } from './controllers/Project/GetProjectController'
import { AuthMiddleware } from './middlewares/AuthMiddleware'
import { HandleUserMiddleware } from './middlewares/HandleUserMiddleware'

const routes = Router()

routes.get(
	'/projects',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	GetAllProjectsController.handle
)

routes.get(
	'/projects/:idProject',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	GetProjectController.handle
)

export { routes }