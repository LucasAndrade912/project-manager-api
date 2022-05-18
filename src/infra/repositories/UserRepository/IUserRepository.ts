export interface IUserRepository {
  createUser(id: string): Promise<void>
  findUserById(id: string): Promise<string | null>
  deleteUser(id: string): Promise<void>
}