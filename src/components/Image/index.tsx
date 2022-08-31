import { PureComponent } from 'react'

import * as S from './style'

interface ImageProps {
	width: number
	height: number
	padding?: number
	rotateDeg?: number
	src: string
	alt?: string
	onClick?: () => void
	cursor?: string
}

export class Image extends PureComponent<ImageProps> {
	render() {
		return <S.Img {...this.props} />
	}
}
