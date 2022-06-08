interface ColorFindData {
  id: number
  color_name: string
}

export interface IColorRepository {
  findAllColors(): Promise<ColorFindData[]>
}