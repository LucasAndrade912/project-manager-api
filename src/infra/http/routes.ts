import { Router } from 'express'

import { AuthMiddleware } from './middlewares/AuthMiddleware'
import { HandleUserMiddleware } from './middlewares/HandleUserMiddleware'

import { CreateProjectController } from './controllers/Project/CreateProjectController'
import { GetAllProjectsController } from './controllers/Project/GetAllProjectsController'
import { GetProjectController } from './controllers/Project/GetProjectController'
import { UpdateProjectController } from './controllers/Project/UpdateProjectController'

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

routes.post(
	'/projects',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	CreateProjectController.handle
)

routes.put(
	'/projects',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	UpdateProjectController.handle
)

export { routes }