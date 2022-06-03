export interface TagFindData {
  id: number
  tag_name: string
  color: { color_name: string }
}

export interface ITagRepository {
  createTag(tagName: string, idColor: number): Promise<void>
  findAllTags(idUser: string): Promise<TagFindData[]>
  deleteTag(id: number): Promise<void>
}