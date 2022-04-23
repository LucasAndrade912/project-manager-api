import { ITag } from '../../../core/entities/Tag/ITag'

export interface ITagRepository {
  createTag(newTag: ITag): Promise<ITag>
  findAllTags(): Promise<ITag[]>
  deleteTag(id: number): Promise<void>
}