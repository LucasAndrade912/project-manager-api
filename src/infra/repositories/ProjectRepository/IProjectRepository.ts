import { IProject } from '../../../core/entities/Project/IProject'
import { ITag } from '../../../core/entities/Tag/ITag'
import { ITask } from '../../../core/entities/Task/ITask'

export interface IUpdateProjectProps {
  title?: string,
  description?: string,
  image?: string,
  status?: 'to-do' | 'in-progress' | 'done'
  tasks?: ITask[]
  tags?: ITag[]
}

export interface IProjectRepository {
  createProject(project: IProject): Promise<IProject>
  findAllProjects(): Promise<IProject[]>
  updateProject(id: number, changes: IUpdateProjectProps): Promise<IProject>
  deleteProject(id: number): Promise<void>
}