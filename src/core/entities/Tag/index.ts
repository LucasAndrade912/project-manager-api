import { ITag } from './ITag'

export class Tag {
	public tag: string
	public color: string

	constructor(props: ITag) {
		const colorPropertyContainsHashTag = props.color[0] === '#'
		const colorPropertyIsBetween3and6CharactersLong = props.color.length >= 3 && props.color.length < 7

		if (!colorPropertyContainsHashTag || !colorPropertyIsBetween3and6CharactersLong) {
			throw new Error('Inform valid hexadecimal color')
		}

		this.tag = props.tag
		this.color = props.color
	}
}