import { IProject } from '../../../core/entities/Project/IProject'

export interface CreateProjectProps {
  title?: string
  description?: string
  image?: string
  status?: string | 'to-do' | 'in-progress' | 'done'
  idTags?: number[]
}

export interface UpdateProjectProps {
  title?: string
  description?: string
  image?: string
  status?: 'to-do' | 'in-progress' | 'done'
  connectTags?: number[]
  disconnectTags?: number[]
}

export interface IProjectRepository<T = IProject> {
  createProject(newProject: CreateProjectProps, idUser: string): Promise<T>
  findAllProjects(idUser: string): Promise<T[]>
  findProjectById(idProject: string, idUser: string): Promise<T>
  updateProject(idProject: string, changes: UpdateProjectProps): Promise<T>
  deleteProject(idProject: string): Promise<void>
}