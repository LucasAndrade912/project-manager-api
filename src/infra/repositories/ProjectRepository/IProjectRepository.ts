export interface ProjectCreateData {
  title: string
  status: 'to-do' | 'in-progress' | 'done'
  description?: string
  image?: string
  idTags: number[]
}

export interface ProjectFindData {
  id: string
  title: string
  status: 'to-do' | 'in-progress' | 'done'
  description?: string
  image?: string
  created_at: Date
  updated_at?: Date
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
  createProject(data: ProjectCreateData, idUser: string): Promise<void>
  findAllProjects(idUser: string): Promise<ProjectFindData[]>
  findProjectById(idProject: string, idUser: string): Promise<ProjectFindData>
  updateProject(idProject: string, changes: ProjectUpdateData): Promise<void>
  deleteProject(idProject: string): Promise<void>
}