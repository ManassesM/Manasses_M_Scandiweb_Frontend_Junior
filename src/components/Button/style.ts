import styled from 'styled-components'

interface ButtonStyleProps {
	contained: boolean
	bgColor: string
	txtColor: string
	width: number
	height: number
	borderColor?: string
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
	background: ${({ contained, bgColor }) => `${contained && bgColor}`};
	color: ${({ txtColor }) => `${txtColor}`};
	border: ${({ borderColor, bgColor }) =>
		`1px solid ${borderColor ?? bgColor}`};

	text-transform: uppercase;

	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};

	transition: all 0.2s ease-in-out;

	opacity: ${({ disabled }) => `${disabled ? '0.5' : '1'}`};
	cursor: ${({ disabled }) => `${disabled ? 'not-allowed' : 'pointer'}`};

	&:hover:not(:disabled) {
		filter: brightness(1.1);
	}
`
