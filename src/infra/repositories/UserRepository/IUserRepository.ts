import { IUser } from '../../../core/entities/User/IUser'

export interface IUserRepository {
  createUser(id: string): Promise<IUser>
  findUserById(id: string): Promise<IUser>
  deleteUser(id: string): Promise<void>
}