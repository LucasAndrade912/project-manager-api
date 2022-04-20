import { IProject } from '../../../core/entities/Project/IProject'

export interface IProjectRepository {
  createProject(project: IProject): Promise<IProject>
}