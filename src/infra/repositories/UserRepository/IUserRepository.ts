import { IUser } from '../../../core/entities/User/IUser'

export interface IUserRepository<T = IUser> {
  createUser(id: string): Promise<IUser>
  findUserById(id: string): Promise<T>
  deleteUser(id: string): Promise<void>
}