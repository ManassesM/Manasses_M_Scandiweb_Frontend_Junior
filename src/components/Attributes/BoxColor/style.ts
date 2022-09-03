import styled from 'styled-components'

interface BoxColorContainerProps {
	active: boolean
	bgColor: string
	isMinicart?: boolean
}

interface WrapperBoxColorProps {
	active: boolean
	isMinicart?: boolean
}

export const BoxColorContainer = styled.div<BoxColorContainerProps>`
	position: absolute;
	right: 50%;
	bottom: 50%;
	transform: translate(50%, 50%);

	background: ${({ bgColor }) => bgColor};

	height: ${({ isMinicart }) => `${isMinicart ? '16' : '32'}px`};
	width: ${({ isMinicart }) => `${isMinicart ? '16' : '32'}px`};

	cursor: pointer;
`

export const WrapperBoxColor = styled.div<WrapperBoxColorProps>`
	position: relative;
	border: ${({ active, theme }) => active && `1px solid ${theme.palette.main}`};

	height: ${({ isMinicart }) => `${isMinicart ? '20' : '36'}px`};
	width: ${({ isMinicart }) => `${isMinicart ? '20' : '36'}px`};
	&:hover {
		border: ${({ theme }) => `1px solid ${theme.palette.main}`};
	}
`
