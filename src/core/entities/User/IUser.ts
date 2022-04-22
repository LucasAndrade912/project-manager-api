import { IProject } from '../Project/IProject'

export interface IUser {
  id: string
  projects: IProject[]
}