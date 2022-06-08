import { IColorRepository } from '../../../infra/repositories/ColorRepository/IColorRepository'

export class GetAllColors {
	constructor (
    private repository: IColorRepository
	) {}
  
	async exec() {
		const colors = await this.repository.findAllColors()

		return colors
	}
}