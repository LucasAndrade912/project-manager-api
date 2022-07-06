import { ITag } from './ITag'

export class Tag {
	public tag_name: string
	public color: string
	public id_color: number

	constructor(props: ITag) {
		if (props.color) {
			const colorPropertyContainsHashTag = props.color[0] === '#'
			const colorPropertyIsBetween3and6CharactersLong = props.color.length >= 3 && props.color.length < 7
	
			if (!colorPropertyContainsHashTag || !colorPropertyIsBetween3and6CharactersLong) {
				throw new Error('Inform valid hexadecimal color')
			}
		}

		this.tag_name = props.tag_name
		this.color = props.color
		this.id_color = props.id_color
	}
}