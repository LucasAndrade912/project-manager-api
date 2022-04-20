import { ITag } from './ITag'

export class Tag {
	public tag: string
	public color: string

	constructor(props: ITag) {
		this.tag = props.tag
		this.color = props.color
	}
}