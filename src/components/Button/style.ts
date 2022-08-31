import styled from 'styled-components'

interface ButtonStyleProps {
	contained: boolean
	bgColor: string
	txtColor: string
	width: number
	height: number
	disabled: boolean
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
	background: ${({ contained, bgColor }) => `${contained && bgColor}`};
	color: ${({ txtColor }) => `${txtColor}`};

	border: ${({ bgColor }) => `1px solid ${bgColor}`};

	text-transform: uppercase;

	width: 100%;
	padding: 13px 100px;

	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};

	transition: all 0.2s ease-in-out;

	opacity: ${({ disabled }) => `${disabled ? '0.5' : '1'}`};
	cursor: ${({ disabled }) => `${disabled ? 'not-allowed' : 'pointer'}`};

	&:hover {
		filter: brightness(1.1);
	}
`
