import styled from 'styled-components'

interface ImageProps {
	src: string
	width: number
	height: number
	padding?: number
	rotateDeg?: number
	cursor?: string
}

export const Img = styled.div<ImageProps>`
	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};
	padding: ${({ padding }) => `${padding}px`};
	cursor: ${({ cursor }) => cursor ?? 'pointer'};

	background: ${({ src }) => `url(${src})`};
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;

	transform: ${({ rotateDeg }) => rotateDeg && `rotate(${rotateDeg}deg)`};
`
