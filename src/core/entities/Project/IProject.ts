import { ITag } from '../Tag/ITag'
import { ITask } from '../Task/ITask'

export interface IProject {
  title: string,
  description?: string,
  image?: string,
  status: string | 'to-do' | 'in-progress' | 'done'
  tasks?: ITask[]
  tags?: ITag[]
}