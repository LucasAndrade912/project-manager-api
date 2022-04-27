import { Task } from '@prisma/client'
import { ITask } from '../../../core/entities/Task/ITask'
import { prisma } from '../prisma/prismaClient'
import { ITaskRepository, TaskProps } from './ITaskRepository'

export class SqlTaskRepository implements ITaskRepository<Task> {
	async createTask(newTask: ITask, idProject: string): Promise<Task> {
		const task = await prisma.task.create({
			data: {
				task_name: newTask.task_name,
				finished: newTask.finished,
				projects: {
					connect: {
						id: idProject
					}
				}
			}
		})

		return task
	}

	async updateTask(idTask: number, task: TaskProps): Promise<Task> {
		const updatedTask = await prisma.task.update({
			where: { id: idTask },
			data: {
				task_name: task.taskName,
				finished: task.finished
			}
		})

		return updatedTask
	}
}