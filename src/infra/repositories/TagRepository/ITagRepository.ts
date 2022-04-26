import { ITag } from '../../../core/entities/Tag/ITag'

export interface ITagRepository<T = ITag> {
  createTag(tagName: string, idColor: number): Promise<T>
  findAllTags(): Promise<T[]>
  deleteTag(id: number): Promise<void>
}