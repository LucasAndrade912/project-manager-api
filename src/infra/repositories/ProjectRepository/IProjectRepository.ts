export interface ProjectCreateData {
  title: string
  status: 'to-do' | 'in-progress' | 'done'
  description?: string
  image?: string
  idTags: number[]
}

interface TagData {
  tag_name: string
  color: { color_name: string }
}

interface TaskData {
  task_name: string
  finished: boolean
}

export interface ProjectFindData {
  id: string
  title: string
  status: 'to-do' | 'in-progress' | 'done'
  description?: string
  image?: string
  created_at: Date
  updated_at?: Date
  tags?: TagData[]
  tasks?: TaskData[]
}

export interface ProjectUpdateData {
  title?: string
  status?: 'to-do' | 'in-progress' | 'done'
  description?: string
  image?: string
  connectTags?: number[]
  disconnectTags?: number[]
}

export interface IProjectRepository {
  createProject(data: ProjectCreateData, idUser: string): Promise<string>
  findAllProjects(idUser: string): Promise<ProjectFindData[]>
  findProjectById(idProject: string, idUser: string): Promise<ProjectFindData>
  updateProject(idProject: string, changes: ProjectUpdateData): Promise<void>
  deleteProject(idProject: string): Promise<void>
}