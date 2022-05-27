import { Router } from 'express'

import { AuthMiddleware } from './middlewares/AuthMiddleware'
import { HandleUserMiddleware } from './middlewares/HandleUserMiddleware'

import { CreateProjectController } from './controllers/Project/CreateProjectController'
import { GetAllProjectsController } from './controllers/Project/GetAllProjectsController'
import { GetProjectController } from './controllers/Project/GetProjectController'
import { UpdateProjectController } from './controllers/Project/UpdateProjectController'
import { DeleteProjectController } from './controllers/Project/DeleteProjectController'

import { UpdateTaskController } from './controllers/Task/UpdateTaskController'

const routes = Router()

// Projects
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

routes.delete(
	'/projects/:idProject',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	DeleteProjectController.handle
)

// Tasks
routes.put(
	'/tasks',
	AuthMiddleware.authenticate,
	HandleUserMiddleware.handle,
	UpdateTaskController.handle
)

export { routes }